import React, { useState } from 'react';

// Mock data to visualize the grid
const MOCK_SONGS = [
  { id: 1, name: "Baby Shark", artist: "Pinkfong", cover: "https://via.placeholder.com/150" },
  { id: 2, name: "Let It Go", artist: "Idina Menzel", cover: "https://via.placeholder.com/150" },
  { id: 3, name: "Hakuna Matata", artist: "The Lion King", cover: "https://via.placeholder.com/150" },
  { id: 4, name: "You're Welcome", artist: "Moana", cover: "https://via.placeholder.com/150" },
  { id: 5, name: "Life is a Highway", artist: "Cars", cover: "https://via.placeholder.com/150" },
];

export default function KidsPlayer() {
  const [currentSong, setCurrentSong] = useState(MOCK_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans p-4">
      
      {/* 1. THE GRID AREA */}
      <div className="flex-grow overflow-y-auto pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {MOCK_SONGS.map((song) => (
            <button
              key={song.id}
              onClick={() => {
                setCurrentSong(song);
                setIsPlaying(true);
              }}
              className={`flex flex-col items-center p-4 bg-white border-4 rounded-2xl transition-all active:scale-95 shadow-sm
                ${currentSong.id === song.id ? 'border-green-400 bg-green-50' : 'border-gray-200'}`}
            >
              {/* Album Art (Recognizable for kids) */}
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                 <img src={song.cover} alt={song.name} className="rounded-md w-full h-full object-cover" />
              </div>
              
              <span className="text-lg font-bold text-gray-700 truncate w-full tracking-tight">
                {song.name}
              </span>
              
              {/* Play Icon */}
              <div className="mt-2 text-green-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          ))}

          {/* Add Song Button */}
          <button className="flex flex-col items-center justify-center p-4 border-4 border-dashed border-gray-300 rounded-2xl text-gray-400 hover:bg-gray-100">
            <span className="text-4xl">+</span>
            <span className="font-bold">Add Song</span>
          </button>
        </div>
      </div>

      {/* 2. THE PLAYER BAR (Fixed at bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-50 border-t border-blue-100 p-6 flex flex-col items-center shadow-2xl">
        <p className="text-xl font-black text-blue-900 mb-4 tracking-wide uppercase">
          {isPlaying ? `Playing: ${currentSong.name}` : "Pick a song!"}
        </p>
        
        <div className="flex items-center gap-12">
          {/* Back Button */}
          <button className="text-green-500 active:scale-90 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-green-500 text-white p-4 rounded-full shadow-lg active:scale-90 transition-transform"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button className="text-green-500 active:scale-90 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}