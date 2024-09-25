import React from 'react';
import { Episode as EpisodeType } from '@/types';
import Image from 'next/image';
import EpisodeDetailButton from './EpisodeDetail';

const Episode: React.FC<EpisodeType> = (episode) => {
    const descriptionLength = 50;
    const truncatedDescription = episode.description.length > descriptionLength
        ? `${episode.description.slice(0, descriptionLength)}...`
        : episode.description;


    return (
        <div className="p-3 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center">
                <Image
                    src={episode.image}
                    alt={episode.description}
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                />
                <div>
                    <h3 className="text-white font-semibold">{episode.title}</h3>
                    <p className="text-gray-400 text-sm">
                        {episode.duration} {truncatedDescription}
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button className="text-white">▶️</button>
                <EpisodeDetailButton {...episode} />
            </div>
        </div>
    );
};

export default Episode;
