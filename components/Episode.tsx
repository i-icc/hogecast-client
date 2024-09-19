import React from 'react';
import { Episode } from '@/types';

const Episode: React.FC<Episode> = ({ title, release_datetime, duration }) => {
    return (
        <div className="p-4 border-b border-gray-800">
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{release_datetime} ・ {duration}</p>
        </div>
    );
};

export default Episode;
