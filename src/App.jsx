import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Heart, Stars, Sparkles, MapPin, Calendar, Clock, 
  ChevronRight, Music, Camera, Quote, Gift, Send, 
  User, CheckCircle2, Volume2, VolumeX, PlayCircle, Unlock
} from 'lucide-react';

const App = () => {
  const [stage, setStage] = useState('fun'); 
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Runaway "No" Button Logic
  const moveNoButton = useCallback(() => {
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setIsNoButtonMoved(true);
  }, []);

  const startSweetStage = () => {
    setStage('sweet');
  };

  const enableMusic = () => {
    setAudioEnabled(true);
    setIsMuted(false);
  };

  // --- STAGE 1: FUN & PLAYFUL ---
  const FunStage = () => (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 text-white text-center overflow-hidden">
      <div className="mb-8 relative inline-block">
        <Stars className="text-yellow-400 w-12 h-12 animate-pulse absolute -top-6 -left-6" />
        <div className="bg-[#1e3a8a]/30 p-6 rounded-full border border-blue-500/20">
          <Heart className="text-rose-500 w-16 h-16 animate-bounce" fill="currentColor" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Wait! One question...</h1>
      <p className="text-slate-400 text-lg mb-12 max-w-md">
        I have a very important question. And just so you know, I've made it impossible to say no.
      </p>

      <div className="relative w-full max-w-lg h-64 bg-[#1e3a63] rounded-[2.5rem] p-8 flex flex-col items-center justify-center border border-blue-400/20 shadow-2xl">
        <p className="text-2xl font-bold mb-10">Will you be my Valentine?</p>
        
        <div className="flex gap-6 items-center justify-center w-full">
          <button 
            onClick={startSweetStage}
            className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-xl shadow-rose-500/30 transition-all hover:scale-110 active:scale-95 z-10"
          >
            YES! ❤️
          </button>
          
          <button 
            onMouseEnter={moveNoButton}
            style={isNoButtonMoved ? { position: 'fixed', top: noButtonPos.top, left: noButtonPos.left, zIndex: 100 } : {}}
            className="px-10 py-4 bg-slate-700/50 text-slate-400 rounded-full font-bold border border-slate-600 transition-all duration-150 cursor-default"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );

  // --- STAGE 2: SENTIMENTAL & SWEET ---
  const SweetStage = () => (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 overflow-y-auto pb-20">
      {!audioEnabled ? (
        // MUSIC UNLOCK SCREEN (Required for Browser Audio)
        <div className="h-screen flex flex-col items-center justify-center text-center p-6 bg-[#0f172a] z-50">
          <div className="bg-rose-500/10 p-10 rounded-[3rem] border border-rose-500/20 flex flex-col items-center">
            <Music className="text-rose-400 w-16 h-16 mb-6 animate-pulse" />
            <h2 className="text-3xl font-serif italic mb-4">A gift for your ears...</h2>
            <p className="text-slate-400 mb-8 max-w-xs text-sm">Tap the button below to sync the vibe and unlock the next part of your surprise.</p>
            <button 
              onClick={enableMusic}
              className="flex items-center gap-3 px-8 py-4 bg-rose-500 text-white rounded-full font-bold hover:bg-rose-600 transition-all scale-110 shadow-xl shadow-rose-500/40"
            >
              <Unlock size={20} /> UNLOCK MUSIC
            </button>
          </div>
        </div>
      ) : (
        // THE REAL SWEET CONTENT
        <>
          <div className="h-screen flex flex-col items-center justify-center text-center p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent"></div>
            <Quote className="text-rose-500/20 w-20 h-20 mb-8" />
            <h2 className="text-5xl md:text-7xl font-serif italic mb-6">"To the one who has my heart..."</h2>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
              Now that the music is playing, I wanted to tell you exactly why you're my favorite human.
            </p>
            <div className="mt-12 animate-bounce flex flex-col items-center gap-2 text-slate-500">
              <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
              <ChevronRight className="rotate-90" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 space-y-32">
            <div className="flex flex-col md:flex-row gap-12 items-center group">
              <div className="w-full md:w-1/2 relative">
                 <div className="absolute -inset-4 bg-rose-500/10 rounded-3xl blur-xl transition-all"></div>
                 <div className="relative bg-[#1e3a63] aspect-square rounded-2xl border border-rose-500/30 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-rose-400 opacity-40" />
                 </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                 <h3 className="text-3xl font-bold text-white">The Way You Laugh</h3>
                 <p className="text-lg text-slate-400 leading-relaxed">
                   There's a specific way your eyes crinkle when you're genuinely happy. It's the most beautiful thing I've ever seen.
                 </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center group">
              <div className="w-full md:w-1/2 relative">
                 <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl transition-all"></div>
                 <div className="relative bg-[#1e3a63] aspect-square rounded-2xl border border-blue-500/30 flex flex-col items-center justify-center overflow-hidden">
                    <Music className="w-16 h-16 text-blue-400 animate-pulse" />
                    <div className="mt-4 flex gap-1 items-end h-8">
                      <div className="w-1.5 bg-blue-400 animate-[music-bar_1s_infinite]"></div>
                      <div className="w-1.5 bg-blue-400 animate-[music-bar_1.2s_infinite]"></div>
                      <div className="w-1.5 bg-blue-400 animate-[music-bar_0.8s_infinite]"></div>
                    </div>
                    <span className="absolute bottom-4 left-4 text-xs font-mono text-blue-300/50 uppercase">Jeena Jeena — Playing Now</span>
                 </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-left md:text-right">
                 <h3 className="text-3xl font-bold text-white">Our Shared Silence</h3>
                 <p className="text-lg text-slate-400 leading-relaxed">
                   Listening to <span className="text-blue-400 font-medium italic underline decoration-blue-400/30">Jeena Jeena</span> while sitting next to you is my favorite therapy.
                 </p>
              </div>
            </div>

            <div className="pt-20 text-center border-t border-slate-800">
               <Heart className="mx-auto text-rose-500 mb-6" size={40} />
               <p className="text-2xl font-serif italic mb-12">"You're my home and my greatest adventure."</p>
               <button onClick={() => setStage('chic')} className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-rose-50 shadow-2xl transition-all">
                 Continue to Stage 3 
               </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // --- STAGE 3: MINIMALIST & CHIC ---
  const ChicStage = () => (
    <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col items-center justify-center p-8 transition-colors duration-1000">
      <div className="max-w-lg w-full text-center space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">The Final Revelation</span>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4"></div>
        </div>
        <h2 className="text-5xl font-light tracking-tighter leading-tight font-serif">A Celebration of <span className="italic">Us</span>.</h2>
        <div className="space-y-8 py-12 border-y border-slate-100">
           <div className="flex justify-between items-center"><span className="text-sm font-medium text-slate-400 uppercase">Event</span><span className="text-sm font-bold uppercase">Valentine's Night</span></div>
           <div className="flex justify-between items-center"><span className="text-sm font-medium text-slate-400 uppercase">Location</span><span className="text-sm font-bold uppercase">Our Favorite Spot</span></div>
           <div className="flex justify-between items-center"><span className="text-sm font-medium text-slate-400 uppercase">Time</span><span className="text-sm font-bold uppercase">Sundown</span></div>
        </div>
        <button onClick={() => setStage('final')} className="w-full py-5 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-rose-600 transition-colors">Confirm Reservation</button>
      </div>
    </div>
  );

  // --- FINAL SCREEN ---
  const FinalScreen = () => (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="animate-in zoom-in duration-1000">
        <div className="relative inline-block mb-10"><CheckCircle2 className="text-rose-500 w-24 h-24 relative" /></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Confirmed!</h1>
        <p className="text-rose-400 text-xl font-serif italic mb-12">I love you more than words can say.</p>
        <button onClick={() => {setStage('fun'); setAudioEnabled(false);}} className="text-slate-500 hover:text-slate-300 text-sm underline underline-offset-8">Relive the experience</button>
      </div>
      {[...Array(15)].map((_, i) => (
        <div key={i} className="absolute pointer-events-none text-rose-500/10 animate-fall" style={{ left: `${Math.random() * 100}%`, top: `-50px`, animationDuration: `${Math.random() * 5 + 3}s`, animationDelay: `${Math.random() * 5}s` }}><Heart size={Math.random() * 30 + 10} fill="currentColor" /></div>
      ))}
    </div>
  );

  return (
    <div className="font-sans">
      {stage === 'fun' && <FunStage />}
      {stage === 'sweet' && <SweetStage />}
      {stage === 'chic' && <ChicStage />}
      {stage === 'final' && <FinalScreen />}

      {/* Persistent Audio Controller */}
      {audioEnabled && (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full shadow-lg transition-all border ${stage === 'chic' ? 'bg-slate-100 text-slate-900' : 'bg-[#1e3a63] text-white border-white/10'}`}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
          </button>
          
          <div className="opacity-0 pointer-events-none absolute">
            <iframe 
              width="10" 
              height="10" 
              src={`https://www.youtube.com/embed/H2f7M93u6qk?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=H2f7M93u6qk&enablejsapi=1`} 
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fall { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
        @keyframes music-bar { 0%, 100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
        .animate-fall { animation: fall linear infinite; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}} />
    </div>
  );
};

export default App;