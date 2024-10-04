import { logEvent } from 'firebase/analytics';
import { analytics } from './firebaseConfig';

export const trackSelectRadioEvent = (radioKey: string, podcastKey: string) => {
    if (analytics) {
        logEvent(analytics, 'selectRadio', {
            radio_key: radioKey,
            podcast_key: podcastKey,
        });
        console.log("log event! eventName:selectRadio", radioKey, podcastKey)
    } else {
        console.log("unlog event! eventName:selectRadio", radioKey, podcastKey)
    }
};

export const trackInstallAppEvent = (isInstalled: boolean) => {
    if (analytics) {
        logEvent(analytics, 'installApp', {});
    } else {
        console.log("unlog event! eventName:installApp", isInstalled)
    }
};