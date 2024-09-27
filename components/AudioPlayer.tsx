"use client";

import React, { useRef, useState } from 'react';

type AudioPlayerProps = {
    audioUrl: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md bg-white max-w-sm mx-auto">
            <audio ref={audioRef} src={audioUrl} preload="auto" />
            <button
                onClick={handlePlayPause}
                className={`px-4 py-2 rounded-full text-white font-bold focus:outline-none transition-all ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default AudioPlayer;
