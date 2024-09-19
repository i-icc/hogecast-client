import React from 'react';
import Image from 'next/image';
import { Episode } from '@/types';

const PlayerBar: React.FC<Episode> = ({ title, image, release_datetime }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white flex items-center">
            {/* Mock of current playing podcast */}
            <div className="flex items-center">
                <Image
                    src={image}
                    alt="Podcast"
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                />
                <div>
                    <p className="text-sm">{title}</p>
                    <p className="text-xs text-gray-400">{release_datetime}</p>
                </div>
            </div>
            {/* Play/Pause Button */}
            <button className="ml-auto">
                <span>▶️</span>
            </button>
        </div>
    );
};

export default PlayerBar;
