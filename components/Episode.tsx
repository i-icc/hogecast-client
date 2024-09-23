import React from 'react';
import { Episode as EpisodeType } from '@/types';
import Image from 'next/image';

const Episode: React.FC<EpisodeType> = ({ title, release_datetime, duration, image }) => {
    return (
        <div className="p-4 border-b border-gray-800 flex items-center">
            <Image
                src={image}
                alt="Podcast"
                width={48}
                height={48}
                className="rounded-lg mr-4"
            />
            <div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm">{release_datetime} ・ {duration}</p>
            </div>
        </div>
    );
};

export default Episode;
