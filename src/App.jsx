import React, { useState } from 'react';
import { Heart, Music, Camera, Star, ArrowRight, Volume2, MapPin, Coffee, Utensils, Sparkles, Send, Video } from 'lucide-react';

export default function App() {
  const [stage, setStage] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // --- CONFIGURATION ---
  const myPhoneNumber = "919744225110"; 
  
  // FIXED: Standard Spotify Embed URL format
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/2Z9p7E7p7E7p7E7p7E7p7E"; 
  
  // FIXED: Using a CORS proxy to allow the video to stream from GitHub Releases
  const rawVideoUrl = "https://github.com/AdithyaAnil31/valentine/releases/download/v1.0.0/video.mp4";
  const videoReleaseUrl = `https://corsproxy.io/?${encodeURIComponent(rawVideoUrl)}`;
  // ---------------------

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = ["No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not?", "You might regret this!", "Give it another thought!", "Are you absolutely sure?", "This could be a mistake!", "Have a heart!", "Don't be so cold!", "Change of heart?", "Is that your final answer?", "You're breaking my heart ;("];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const yesButtonSize = noCount * 20 + 16;

  const dateOptions = [
    { id: 'coffee', label: 'Cozy Cafe', icon: <Coffee size={20} />, desc: 'Hot chocolate & long talks' },
    { id: 'dinner', label: 'Candlelit Dinner', icon: <Utensils size={20} />, desc: 'Your favorite cuisine' },
    { id: 'stargazing', label: 'Stargazing', icon: <Sparkles size={20} />, desc: 'A quiet night under the stars' },
    { id: 'adventure', label: 'Surprise Adventure', icon: <MapPin size={20} />, desc: 'Let the wind decide' },
  ];

  const handleConfirmDate = () => {
    const selectedOption = dateOptions.find(opt => opt.id === selectedDate);
    const message = `Hey! I just saw your Valentine's surprise... and YES! I'd love to go on a ${selectedOption.label} date with you! ❤️✨`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${myPhoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border-4 border-pink-100 relative overflow-hidden">
        
        {/* Stage 1: The Big Question */}
        {stage === 1 && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center">
              <Star className="text-yellow-400 animate-spin-slow" size={48} fill="currentColor" />
            </div>
            <h1 className="text-3xl font-black text-slate-800 leading-tight">Wait! One question...</h1>
            <p className="text-slate-600">I have a very important question. And just so you know, I've made it almost impossible to say no.</p>
            <h2 className="text-2xl font-bold text-pink-600">Will you be my Valentine?</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button onClick={() => setStage(2)} style={{ fontSize: yesButtonSize }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">YES! ❤️</button>
              <button onClick={handleNoClick} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition-all text-base shadow-md">{getNoButtonText()}</button>
            </div>
          </div>
        )}

        {/* Stage 2: Music Player */}
        {stage === 2 && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center"><div className="bg-pink-100 p-4 rounded-full"><Music className="text-pink-500 animate-bounce" size={40} /></div></div>
            <h2 className="text-2xl font-bold text-slate-800">A gift for your ears...</h2>
            <iframe 
              src={spotifyEmbedUrl} 
              width="100%" height="152" frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              className="rounded-2xl shadow-inner mt-4"
            ></iframe>
            <button onClick={() => setStage(3)} className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl group">Next Surprise <ArrowRight size={20} /></button>
          </div>
        )}

        {/* Stage 3: The Video Surprise */}
        {stage === 3 && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-700">
            <div className="flex justify-center"><div className="bg-purple-100 p-4 rounded-full"><Video className="text-purple-500 animate-pulse" size={40} /></div></div>
            <h2 className="text-2xl font-bold text-slate-800">A special moment...</h2>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black">
              <video 
                controls autoPlay playsInline crossOrigin="anonymous"
                className="w-full h-auto" style={{ maxHeight: '300px' }}
              >
                <source src={videoReleaseUrl} type="video/mp4" />
              </video>
            </div>
            <button onClick={() => setStage(4)} className="w-full bg-purple-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl">Continue</button>
          </div>
        )}

        {/* Stage 4: Memories & Stage 5: Date Selector (Same as before but re-numbered) */}
        {stage === 4 && (
          <div className="space-y-6 animate-in fade-in duration-1000">
            <h2 className="text-2xl font-bold text-slate-800">To the one who has my heart...</h2>
            <div className="text-left space-y-4">
               <p className="text-sm text-slate-600 border-l-4 border-pink-200 pl-4 italic">"You make every bad day better just by existing."</p>
            </div>
            <button onClick={() => setStage(5)} className="w-full bg-pink-500 text-white font-bold py-4 px-6 rounded-2xl">Plan our date</button>
          </div>
        )}

        {stage === 5 && (
          <div className="space-y-6 animate-in fade-in zoom-in">
            <h2 className="text-2xl font-bold text-slate-800">Pick a location:</h2>
            <div className="grid gap-3">
              {dateOptions.map((opt) => (
                <button key={opt.id} onClick={() => setSelectedDate(opt.id)} className={`p-4 rounded-2xl border-2 ${selectedDate === opt.id ? 'border-pink-500 bg-pink-50' : 'border-slate-100'}`}>
                  {opt.label}
                </button>
              ))}
            </div>
            {selectedDate && <button onClick={handleConfirmDate} className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-2xl">Confirm & Tell Me!</button>}
          </div>
        )}
      </div>
    </div>
  );
}