import React from 'react';
import Image from 'next/image';
import { Podcast } from '@/types';

const PodcastCard: React.FC<Podcast> = ({ image, title, description }) => {
    const descriptionLength = 10;
    const truncatedDescription = description.length > descriptionLength
        ? `${description.slice(0, descriptionLength)}...`
        : description;

    return (
        <div className="w-36 p-2">
            <Image
                src={image}
                alt={title}
                width={144}
                height={144}
                className="rounded-lg"
            />
            <div className="mt-2 text-sm">
                <h3 className="font-bold themaC">{title}</h3>
                <p className="subColer">{truncatedDescription}</p>
            </div>
        </div>
    );
};

export default PodcastCard;
