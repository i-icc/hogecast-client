import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { FirestoreCollections } from './constants';  // Import the enum
import { Episode, Podcast } from "@/types";

export const getPodcasts = async (): Promise<Podcast[]> => {
    const podcastsCollection = collection(db, FirestoreCollections.Podcasts);
    const podcastsSnapshot = await getDocs(podcastsCollection);
    return podcastsSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        image: doc.data().image,
        description: doc.data().description,
    }));
};

export const getEpisodes = async (): Promise<Episode[]> => {
    const episodesCollection = collection(db, FirestoreCollections.Episodes);
    const episodesSnapshot = await getDocs(episodesCollection);
    return episodesSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        release_datetime: doc.data().release_datetime,
        duration: doc.data().release_datetime,
        description: doc.data().description,
        description_html: doc.data().description_html,
        image: doc.data().image,
        radio_key: doc.data().radio_key,
        sound_url: doc.data().sound_url
    }));
};
