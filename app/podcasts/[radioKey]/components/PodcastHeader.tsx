import React from 'react';
import Image from 'next/image';
import { Podcast as PodcastType } from '@/types';
import Link from 'next/link';

const PodcastHeader: React.FC<PodcastType> = ({ title, image, description }) => {
    const descriptionLength = 15;
    const truncatedDescription = description.length > descriptionLength
        ? `${description.slice(0, descriptionLength)}...`
        : description;

    return (
        <div className="relative w-full h-[300px] bg-black text-white">
            {/* 背景画像とフェードアウト効果 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70">
                <Image
                    src={image}
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
                <button className="text-white">
                    <b>⋯</b>
                </button>
            </div>

            {/* タイトルと説明を左下に配置 */}
            <div className="absolute bottom-4 left-4 z-10">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm text-gray-300">{truncatedDescription}</p>
            </div>


            <div className="absolute bottom-4 left-4 z-10">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm text-gray-300">{truncatedDescription}</p>
            </div>
        </div >
    );
};

export default PodcastHeader;
