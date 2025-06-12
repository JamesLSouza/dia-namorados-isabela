import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a romantic background music URL (you can replace with your preferred track)
  const musicUrl = 'https://www.soundjay.com/misc/sounds/romantic-music.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set to 30% volume
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay prevented by browser');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20">
      <audio ref={audioRef} preload="metadata">
        <source src={musicUrl} type="audio/mpeg" />
        {/* Fallback: You can add a local audio file in public folder */}
        Your browser does not support the audio element.
      </audio>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={togglePlay}
          className="text-white hover:text-pink-200 transition-colors duration-300 p-1"
          title={isPlaying ? 'Pausar música' : 'Tocar música'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleMute}
          className="text-white hover:text-pink-200 transition-colors duration-300 p-1"
          title={isMuted ? 'Ativar som' : 'Silenciar'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;