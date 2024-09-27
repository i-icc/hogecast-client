'use client';

import { togglePlayPause } from '@/redux/slices/episodeSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ModalProps {
    onClose: () => void;
    audioRef: React.MutableRefObject<HTMLAudioElement | null>
}

const AudioModal: React.FC<ModalProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const { isPlaying, title, image, release_datetime, radio_key } = useSelector((state: RootState) => state.episode);

    const handlePlayPause = () => {
        dispatch(togglePlayPause(!isPlaying));
    };

    if (!radio_key) return (<></>);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            onClick={onClose}
        >
            <div
                className="w-full h-[90%] bg-black rounded-t-2xl shadow-lg overflow-y-auto relative border-t-2 border-gray-400"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center items-center mb-4">
                    <Image
                        src={image}
                        alt={title}
                        width={128}
                        height={128}
                        className="rounded-lg mb-4"
                    />
                </div>

                {/* 番組情報 */}
                <div className="text-left mb-4">
                    <p className="text-sm text-gray-400">{release_datetime}</p>
                    <p className="text-lg font-bold">{title}</p>
                    <p className="text-base text-lime-300">{radio_key}</p>
                </div>

                <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>3:00</span>
                    <input type="range" min="0" max="100" value="50" className="w-full mx-2" />
                    <span>-2:54</span>
                </div>

                {/* Control Buttons */}
                <div className="flex justify-between items-center mt-4">
                    <button className="text-white">
                        <i className="fas fa-backward-step"></i>
                        15
                    </button>
                    <button
                        onClick={handlePlayPause}
                        className="bg-white text-black rounded-full p-3 shadow-lg"
                    >
                        {isPlaying ? (
                            <i className="fas fa-pause"></i>
                        ) : (
                            <i className="fas fa-play"></i>
                        )}
                    </button>
                    <button className="text-white">
                        <i className="fas fa-forward-step"></i>
                        30
                    </button>
                </div>

                {/* Volume and Speed Controls */}
                <div className="flex justify-between items-center mt-4">
                    <button className="text-white">
                        <i className="fas fa-volume-up"></i>
                    </button>
                    <input type="range" min="0" max="100" value="70" className="w-full mx-2" />
                    <button className="text-white">
                        1x
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AudioModal;
