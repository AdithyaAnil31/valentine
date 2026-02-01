import React, { useState } from 'react';
import { Heart, Music, Camera, Star, ArrowRight, Volume2, MapPin, Coffee, Utensils, Sparkles, Send, Video } from 'lucide-react';

export default function App() {
  const [stage, setStage] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // --- CONFIGURATION ---
  const myPhoneNumber = "919744225110"; 
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/5lKE040hUfDAKOR8HLG92p?utm_source=generator&theme=0";
  // ---------------------

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!",
      "Last chance!", "Surely not?", "You might regret this!",
      "Give it another thought!", "Are you absolutely sure?",
      "This could be a mistake!", "Have a heart!",
      "Don't be so cold!", "Change of heart?",
      "Is that your final answer?", "You're breaking my heart ;("
    ];
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
            <p className="text-slate-600">
              I have a very important question. And just so you know, I've made it almost impossible to say no.
            </p>
            <h2 className="text-2xl font-bold text-pink-600">Will you be my Valentine?</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setStage(2)}
                style={{ fontSize: yesButtonSize }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                YES! ❤️
              </button>
              <button
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition-all text-base shadow-md"
              >
                {getNoButtonText()}
              </button>
            </div>
          </div>
        )}

        {/* Stage 2: Persistent Music Player */}
        {stage >= 2 && (
          <div className={`transition-all duration-700 ${stage === 2 ? 'mb-6' : 'mt-auto pt-4 border-t border-pink-50'}`}>
            {stage === 2 && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4">
                <div className="flex justify-center">
                  <div className="bg-pink-100 p-4 rounded-full">
                    <Music className="text-pink-500 animate-bounce" size={40} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">A gift for your ears...</h2>
                <p className="text-slate-600 italic text-sm">"Jeena Jeena — a vibe that reminds me of us."</p>
              </div>
            )}
            
            <div className={`w-full transition-all duration-500 ${stage > 2 ? 'opacity-80 scale-95' : ''}`}>
              <iframe 
                src={spotifyEmbedUrl}
                width="100%" 
                height={stage === 2 ? "152" : "80"} 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-2xl shadow-inner mt-4"
              ></iframe>
            </div>

            {stage === 2 && (
              <div className="mt-6 space-y-4">
                <p className="text-xs text-slate-400">
                  Tap play on the Spotify widget, then click below to continue.
                </p>
                <button
                  onClick={() => setStage(3)}
                  className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl group"
                >
                  Unlock the next surprise
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Stage 3: Memories (Moved UP) */}
        {stage === 3 && (
          <div className="space-y-6 animate-in fade-in duration-1000">
            <div className="flex justify-center">
              <Heart className="text-red-500 animate-pulse" size={50} fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">"To the one who has my heart..."</h2>
            
            <div className="text-left space-y-6 overflow-y-auto max-h-60 pr-2 mb-6 custom-scrollbar">
              <div className="border-l-4 border-pink-200 pl-4 py-1">
                <div className="flex items-center gap-2 mb-1">
                  <Camera size={16} className="text-pink-400" />
                  <h3 className="font-bold text-slate-700">The Way You Laugh</h3>
                </div>
                <p className="text-sm text-slate-600">There's a specific way your eyes crinkle when you're genuinely happy. It's the most beautiful thing I've ever seen.</p>
              </div>

              <div className="border-l-4 border-pink-200 pl-4 py-1">
                <div className="flex items-center gap-2 mb-1">
                  <Volume2 size={16} className="text-pink-400" />
                  <h3 className="font-bold text-slate-700">Our Shared Time</h3>
                </div>
                <p className="text-sm text-slate-600">Listening to you while sitting next to you is my favorite therapy. It feels like home.</p>
              </div>

              <div className="border-l-4 border-pink-200 pl-4 py-1">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-pink-400" />
                  <h3 className="font-bold text-slate-700">Your Infinite Support</h3>
                </div>
                <p className="text-sm text-slate-600">You make every bad day better just by existing. I'm so lucky to have you.</p>
              </div>
            </div>

            <button
              onClick={() => setStage(4)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              I have one more surprise...
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Stage 4: Video (Moved DOWN) */}
        {stage === 4 && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-700">
            <div className="flex justify-center">
              <div className="bg-purple-100 p-4 rounded-full">
                <Video className="text-purple-500 animate-pulse" size={40} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">A special moment...</h2>
            
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border-2 border-purple-100 bg-black">
              <video 
                controls 
                autoPlay 
                muted
                playsInline
                className="w-full h-auto"
                style={{ maxHeight: '300px' }}
              >
                {/* process.env.PUBLIC_URL handles the correct path on GitHub Pages */}
                <source src={process.env.PUBLIC_URL + "/video.MP4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-xs text-slate-400">Tap to play!</p>

            <button
              onClick={() => setStage(5)}
              className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl group"
            >
              Let's plan our date
              <MapPin size={20} className="group-hover:animate-bounce" />
            </button>
          </div>
        )}

        {/* Stage 5: Date Selector */}
        {stage === 5 && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-700">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Our Next Adventure</h2>
              <p className="text-sm text-slate-500 text-center">Pick a location for our special day:</p>
            </div>

            <div className="grid gap-3">
              {dateOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDate(option.id)}
                  className={`flex items-center p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedDate === option.id 
                    ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-200 shadow-md' 
                    : 'border-slate-100 bg-white hover:border-pink-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${selectedDate === option.id ? 'bg-pink-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-sm">{option.label}</h3>
                    <p className="text-[11px] text-slate-500 leading-tight">{option.desc}</p>
                  </div>
                  {selectedDate === option.id && <Heart size={16} className="ml-2 text-pink-500 fill-current animate-pulse" />}
                </button>
              ))}
            </div>

            {selectedDate && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500 pt-2">
                <button
                  onClick={handleConfirmDate}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 animate-bounce-short"
                >
                  Confirm & Tell Me! <Send size={18} />
                </button>
                <p className="text-[10px] text-slate-400 mt-4 text-center">
                  Clicking will open WhatsApp to send me your choice!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer Signature */}
        {stage >= 4 && (
          <p className="text-[10px] text-slate-400 mt-6 opacity-50">Created with ❤️ just for you</p>
        )}

      </div>
    </div>
  );
}