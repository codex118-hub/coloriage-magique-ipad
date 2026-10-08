/* ========================================================
   Module Audio - Sons synthétisés avec Web Audio API
   100% autonome, zéro fichier externe requis, compatible iPad
   ======================================================== */

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.initContext = this.initContext.bind(this);

    // Initialisation au premier toucher (exigence iOS/iPad Safari)
    window.addEventListener('touchstart', this.initContext, { once: true, passive: true });
    window.addEventListener('mousedown', this.initContext, { once: true, passive: true });
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  // Petit "Pop" éclatant lors du remplissage au seau
  playPop() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.initContext();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      console.warn('Audio playPop error:', e);
    }
  }

  // Son doux de coup de pinceau
  playBrush() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.initContext();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(260, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {
      console.warn('Audio playBrush error:', e);
    }
  }

  // Carillon scintillant pour les paillettes et tampons
  playSparkle() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.initContext();
    try {
      const notes = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6
      const now = this.audioCtx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        gain.gain.setValueAtTime(0, now + idx * 0.04);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.26);
      });
    } catch (e) {
      console.warn('Audio playSparkle error:', e);
    }
  }

  // Son "Whoop" pour annuler
  playUndo() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.initContext();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.14);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {
      console.warn('Audio playUndo error:', e);
    }
  }

  // Son carillon de célébration joyeuse (victoire / sauvegarde)
  playCelebration() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.initContext();
    try {
      const chord = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.audioCtx.currentTime;

      chord.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);

        gain.gain.setValueAtTime(0, now + i * 0.09);
        gain.gain.linearRampToValueAtTime(0.22, now + i * 0.09 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.52);
      });
    } catch (e) {
      console.warn('Audio playCelebration error:', e);
    }
  }
}

// Instance globale exportée
window.soundManager = new SoundManager();
