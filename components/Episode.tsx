import React from 'react';
import { Episode as EpisodeType } from '@/types';
import Image from 'next/image';
import EpisodeDetailButton from './EpisodeDetail';
import PlaylButton from './PlayButton';

const Episode: React.FC<EpisodeType> = (episode) => {
    const descriptionLength = 50;
    const truncatedDescription = episode.description.length > descriptionLength
        ? `${episode.description.slice(0, descriptionLength)}...`
        : episode.description;


    return (
        <div className="p-3 border-b border-gray-600 flex items-center justify-between">
            <div className="flex items-center">
                <Image
                    src={episode.image}
                    alt={episode.description}
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                />
                <div>
                    <h3 className="font-semibold">{episode.title}</h3>
                    <p className="subColer text-sm">
                        {episode.duration} {truncatedDescription}
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <div className='mx-3'><PlaylButton {...episode} /></div>
                <EpisodeDetailButton {...episode} />
            </div>
        </div>
    );
};

export default Episode;
