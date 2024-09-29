import { trackSelectRadioEvent } from '@/lib/firebaseAnalytics';
import { Episode } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EpisodeState extends Episode {
    isPlaying: boolean,
};

const initialState: EpisodeState = {
    isPlaying: false,
    title: '',
    description: '',
    description_html: '',
    image: '',
    id: '',
    radio_key: '',
    release_datetime: '',
    sound_url: '',
    duration: ''
};

const episodeSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setEpisode: (state, action: PayloadAction<Episode>) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.description_html = action.payload.description_html;
            state.image = action.payload.image;
            state.id = action.payload.id;
            state.radio_key = action.payload.radio_key;
            state.release_datetime = action.payload.release_datetime;
            state.sound_url = action.payload.sound_url
            state.duration = action.payload.duration;
            state.isPlaying = false;

            trackSelectRadioEvent(action.payload.id, action.payload.radio_key)
        },
        togglePlayPause: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setEpisode, togglePlayPause } = episodeSlice.actions;
export default episodeSlice.reducer;
