"use client";

import React, { useState } from 'react';
import { Episode as EpisodeType } from '@/types';
import EpisodeModal from './EpisodeModal';

const EpisodeDetailButton: React.FC<EpisodeType> = (episode) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <>
            {isOpen && (<EpisodeModal onClose={onClose} {...episode} />)}
            <button className="text-white" onClick={onOpen}>⋯</button>
        </>
    );
};

export default EpisodeDetailButton;
