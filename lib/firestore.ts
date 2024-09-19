import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { FirestoreCollections } from './constants';  // Import the enum

export const getPodcasts = async () => {
    const podcastsCollection = collection(db, FirestoreCollections.Podcasts);
    const podcastsSnapshot = await getDocs(podcastsCollection);
    return podcastsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getEpisodes = async () => {
    const episodesCollection = collection(db, FirestoreCollections.Episodes);
    const episodesSnapshot = await getDocs(episodesCollection);
    return episodesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
