"use client";

import React, { useEffect, useState } from 'react';
import { Episode as EpisodeType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { togglePlayPause, setEpisode } from '@/redux/slices/episodeSlice';

const PlaylButton: React.FC<EpisodeType> = (episode) => {
    const [isEpisodePlaying, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { isPlaying, id } = useSelector((state: RootState) => state.episode);

    useEffect(() => {
        setIsOpen(isPlaying && episode.id === id)
    }, [isPlaying, id, episode.id]);

    const onPlay = () => {
        if (id !== episode.id) {
            //  再生中のものと異なる場合セットして再生
            dispatch(setEpisode(episode));
            dispatch(togglePlayPause(true));
        } else {
            // すでに再生中のものであれば止めたり再生したり
            dispatch(togglePlayPause(!isEpisodePlaying));
        }
    }

    return (
        <button className="ml-auto" onClick={onPlay}>
            {isEpisodePlaying ? <span>◽️</span> : <span>▶︎</span>}
        </button>
    );
};

export default PlaylButton;
