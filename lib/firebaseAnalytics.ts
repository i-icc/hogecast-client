import { logEvent } from 'firebase/analytics';
import { analytics } from './firebaseConfig';

export const trackSelectRadioEvent = (radioKey: string, podcastKey: string) => {
    if (analytics) {
        logEvent(analytics, 'selectRadio', {
            radio_key: radioKey,
            podcast_key: podcastKey,
        });
    }
};
