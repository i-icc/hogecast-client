import { collection, getDocs, getDoc, doc, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { FirestoreCollections } from './constants';  // Import the enum
import { Episode, Podcast } from "@/types";

const podcastsCollection = collection(db, FirestoreCollections.Podcasts);
const episodesCollection = collection(db, FirestoreCollections.Episodes);

export const getPodcasts = async (): Promise<Podcast[]> => {
    console.log("called getPodcasts")
    const podcastsSnapshot = await getDocs(podcastsCollection);
    return podcastsSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        image: doc.data().image,
        description: doc.data().description,
        description_html: doc.data().description_html,
        sort: doc.data().sort,
    }));
};

export const getPodcastById = async (id: string): Promise<Podcast | null> => {
    console.log("called getPodcastById", id)
    const podcastDoc = doc(podcastsCollection, id);
    const podcastSnapshot = await getDoc(podcastDoc);

    if (podcastSnapshot.exists()) {
        const data = podcastSnapshot.data();
        return {
            id: podcastSnapshot.id,
            title: data.title,
            image: data.image,
            description: data.description,
            description_html: data.description_html,
            sort: data.sort,
        };
    } else {
        return null; // ドキュメントが存在しない場合
    }
};

export const getEpisodesByRadioKey = async (radioKey: string, limitCount: number): Promise<Episode[]> => {
    console.log("called getEpisodesByRadioKey", radioKey, limitCount)
    // クエリを構築する
    const q = query(
        episodesCollection,
        where("radio_key", "==", radioKey),  // radio_key でフィルタリング
        where("is_released", "==", true),  // 公開中
        orderBy("timestapm", "desc"), // timestapm でソート
        limit(limitCount)                    // 件数制限
    );

    // クエリからドキュメントを取得する
    const episodesSnapshot = await getDocs(q);

    return episodesSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        release_datetime: doc.data().release_datetime,
        duration: doc.data().duration,
        description: doc.data().description,
        description_html: doc.data().description_html,
        image: doc.data().image,
        radio_key: doc.data().radio_key,
        sound_url: doc.data().sound_url
    }));
};

export const getEpisodes = async (limitCount: number): Promise<Episode[]> => {
    console.log("called getEpisodes", limitCount)
    // クエリを構築する
    const q = query(
        episodesCollection,
        where("is_released", "==", true),  // 公開中
        orderBy("timestapm", "desc"), // timestapm でソート
        limit(limitCount)                    // 件数制限
    );

    // クエリからドキュメントを取得する
    const episodesSnapshot = await getDocs(q);

    return episodesSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        release_datetime: doc.data().release_datetime,
        duration: doc.data().duration,
        description: doc.data().description,
        description_html: doc.data().description_html,
        image: doc.data().image,
        radio_key: doc.data().radio_key,
        sound_url: doc.data().sound_url
    }));
};