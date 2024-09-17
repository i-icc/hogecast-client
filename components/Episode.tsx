import React from 'react';

interface EpisodeProps {
    title: string;
    date: string;
    duration: string;
}

const Episode: React.FC<EpisodeProps> = ({ title, date, duration }) => {
    return (
        <div className="p-4 border-b border-gray-800">
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{date} ・ {duration}</p>
        </div>
    );
};

export default Episode;
