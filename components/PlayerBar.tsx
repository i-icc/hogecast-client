'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { togglePlayPause } from '../redux/slices/episodeSlice';
import Image from 'next/image';
import AudioModal from './AudioModal';

const PlayerBar: React.FC = () => {
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { sound_url, isPlaying, title, image, release_datetime, radio_key } = useSelector((state: RootState) => state.episode);
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, sound_url]);

    const handlePlayPause = () => {
        dispatch(togglePlayPause(!isPlaying));
    };

    if (!radio_key) return (<></>);

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-600 flex items-center">
            {isOpen && (<AudioModal onClose={onClose} audioRef={audioRef} />)}
            <audio ref={audioRef} src={sound_url} preload="auto" />
            <div className="flex items-center" onClick={onOpen}>
                <Image
                    src={image}
                    alt="Podcast"
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                />
                <div>
                    <p className="text-sm text-white">{title}</p>
                    <p className="text-xs text-gray-400">{release_datetime}</p>
                </div>
            </div>
            {/* Play/Pause Button */}
            <button className="ml-auto text-white" onClick={handlePlayPause}>
                {isPlaying ? <span>■</span> : <span>▶︎</span>}
            </button>
        </div>
    );
};

export default PlayerBar;
