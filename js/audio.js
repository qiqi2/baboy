/**
 * 声音与语音引擎 (Web Audio API + Web Speech API)
 * 零外挂音频依赖，零网络延迟，全平台原生支持
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.speechEnVoice = null;
    this.initVoices();
  }

  initAudio() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if ('speechSynthesis' in window) {
      const load = () => {
        const voices = window.speechSynthesis.getVoices();
        // 优先匹配美音自然女声/童声
        this.speechEnVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Natural') || v.name.includes('Google')))
          || voices.find(v => v.lang.startsWith('en')) || null;
      };
      load();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = load;
      }
    }
  }

  // 1. 气泡/点击音
  playPop() {
    this.initAudio();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(360, now);
    osc.frequency.exponentialRampToValueAtTime(760, now + 0.08);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  // 2. 动物咀嚼/吃掉音 (All gone)
  playChew() {
    this.initAudio();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [0, 0.08, 0.16].forEach(delay => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now + delay);
      osc.frequency.exponentialRampToValueAtTime(150, now + delay + 0.06);
      gain.gain.setValueAtTime(0.25, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + 0.07);
    });
  }

  // 3. 开心正向和弦 (Success Chime)
  playChime() {
    this.initAudio();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.45);
    });
  }

  // 4. 疑惑温柔回弹音 (Try Again)
  playBounce() {
    this.initAudio();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.14);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // 5. 纯正英文点读发音 (Tap-to-Speak)
  speakEnglish(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 0.85; // 幼儿启蒙语速适度放慢
    utter.pitch = 1.25; // 柔和偏高调
    if (this.speechEnVoice) utter.voice = this.speechEnVoice;
    window.speechSynthesis.speak(utter);
  }

  // 6. 中文指导提示语音
  speakChinese(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.9;
    utter.pitch = 1.25;
    window.speechSynthesis.speak(utter);
  }
}

export const audio = new SoundEngine();
