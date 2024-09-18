import React from 'react';
import Image from 'next/image';

interface PodcastCardProps {
    image: string;
    title: string;
    description: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ image, title, description }) => {
    return (
        <div className="w-36 p-2">
            <Image
                src={image}
                alt={title}
                width={144}
                height={144}
                className="rounded-lg"
            />
            <div className="mt-2 text-sm text-white">
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default PodcastCard;
