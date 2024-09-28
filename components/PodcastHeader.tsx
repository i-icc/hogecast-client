"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Podcast as PodcastType } from '@/types';
import Link from 'next/link';
import PodcastModal from './PodcastModal';

const PodcastHeader: React.FC<PodcastType> = (podcast) => {
    const descriptionLength = 15;
    const truncatedDescription = podcast.description.length > descriptionLength
        ? `${podcast.description.slice(0, descriptionLength)}...`
        : podcast.description;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <div className="relative w-full h-[300px] bg-black ">
            {isOpen && (<PodcastModal onClose={onClose} {...podcast} />)}

            {/* 背景画像とフェードアウト効果 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50">
                <Image
                    src={podcast.image}
                    alt="podcast"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="fade-out-gradient"
                />
            </div>


            {/* 戻るボタンとフィルタアイコン */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <Link href="/">
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </Link>
                {/* 詳細アイコン */}
                <button onClick={onOpen} className="text-white pr-4">
                    <b>⋯</b>
                </button>
            </div>

            {/* タイトルと説明を左下に配置 */}
            <div className="absolute bottom-4 left-4 z-1" onClick={onOpen}>
                <h1 className="text-2xl font-bold text-lime-300">{podcast.title}</h1>
                <p className="text-sm text-lime-100">{truncatedDescription}</p>
            </div>
        </div >
    );
};

export default PodcastHeader;
