'use client';

import { togglePlayPause } from '@/redux/slices/episodeSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ModalProps {
    onClose: () => void;
    audioRef: React.MutableRefObject<HTMLAudioElement | null>
}

const AudioModal: React.FC<ModalProps> = ({ onClose, audioRef }) => {
    const dispatch = useDispatch();
    const { isPlaying, title, image, release_datetime, radio_key } = useSelector((state: RootState) => state.episode);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(audioRef.current ? audioRef.current.duration : 0);

    // 再生時間が変わるたびに現在の時間を更新
    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            const updateTime = () => setCurrentTime(audioElement.currentTime);
            audioElement.addEventListener('timeupdate', updateTime);

            // 音声の長さを取得
            const setAudioDuration = () => setDuration(audioElement.duration);
            audioElement.addEventListener('loadedmetadata', setAudioDuration);

            return () => {
                audioElement.removeEventListener('timeupdate', updateTime);
                audioElement.removeEventListener('loadedmetadata', setAudioDuration);
            };
        }
    }, []);

    // プログレスバーを動かしたときに再生位置を変更
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = (Number(e.target.value) / 100) * duration;
        }
    };

    // 時間表示を mm:ss 形式にフォーマット
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.abs(Math.floor(time % 60)).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

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
                className="w-full h-[90%] bg-black rounded-t-2xl shadow-lg overflow-y-auto relative border-t-2 border-gray-400 py-2 px-5"
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-center items-center'>
                    <div className='mt-1 mb-1 pb-3 border-t-2 w-32' onMouseUp={onClose} />
                </div>
                <div className="flex justify-center items-center mb-2">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className="rounded-2xl mb-1"
                    />
                </div>

                {/* 番組情報 */}
                <div className="text-left mb-6">
                    <p className="text-sm text-gray-400">{release_datetime}</p>
                    <p className="text-lg font-bold">{title}</p>
                    <p className="text-base text-lime-300">{radio_key}</p>
                </div>

                {/* プログレスバー */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between text-gray-400 text-sm w-full">
                        {/* 現在の再生時間 */}
                        <span>{formatTime(currentTime)}</span>

                        {/* プログレスバー */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={duration ? (currentTime / duration) * 100 : 0}
                            onInput={handleSeek}
                            className="w-full mx-2"
                        />

                        {/* 残り時間 */}
                        <span>-{formatTime(duration - currentTime)}</span>
                    </div>
                </div>

                {/* Control Buttons */}
                <div className="flex justify-between items-center mt-4">
                    <div>
                        {/* ここにスキップボタン */}
                    </div>
                    <button
                        onClick={handlePlayPause}
                        className="p-3 text-5xl"
                    >
                        {isPlaying ? <span>◽️</span> : <span>▶︎</span>}
                    </button>
                    <div>
                        {/* ここにスキップボタン */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AudioModal;
