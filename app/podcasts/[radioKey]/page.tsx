import Episode from "@/components/Episode";
import { Podcast as PodcastType, Episode as EpisodeType } from '@/types';
import PodcastHeader from "@/components/PodcastHeader";
import Link from "next/link";

async function fetchPodcast(radioKey: string): Promise<PodcastType> {
    // APIやデータベースからデータを取得する（ここではモックデータを使用）
    return { image: 'https://storage.googleapis.com/aicast-radio/images/aicast-icon.jpg', title: 'ai-cast', description: `hoge cast ${radioKey}hoaorgieahgoagoarghaeiuaergliagruabegalgruabgeulreablg`, id: "hoge-cast", description_html: '<a href="https://www.google.com/">hogeyou</a><br>ほげげげげげげげ' };
}

async function fetchEpisodes(radioKey: string): Promise<EpisodeType[]> {
    return [
        {
            title: '旅ノートの作り方...他【2024-09-18】',
            release_datetime: '2024-09-18',
            duration: '00:05:54',
            description: '説明文',
            description_html: '説明文<br>html tag あり<a href="google.com">link</a>',
            image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg',
            id: 'note-cast-2024-09-18',
            radio_key: `${radioKey}`,
            sound_url: 'https://storage.googleapis.com/aicast-radio/note/radio_2024-09-18.mp3'
        },
        {
            title: '【トリセツ】これからtimeleszオーディションを観る方へ...他【2024-09-19】',
            release_datetime: '2024-09-19',
            duration: '00:05:54',
            description: '説明文',
            description_html: '説明文<br>html tag あり<a href="google.com">link</a>',
            image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg',
            id: 'note-cast-2024-09-19',
            radio_key: 'note-cast',
            sound_url: 'https://storage.googleapis.com/aicast-radio/note/radio_2024-09-19.mp3'
        },
    ];
}

export default async function Podcast({
    params,
}: {
    params: { radioKey: string };
}) {
    const podcast = await fetchPodcast(params.radioKey);
    const episodes = await fetchEpisodes(params.radioKey);

    return (
        <div className="bg-black min-h-screen pb-24">
            <PodcastHeader {...podcast} />

            <section className="p-4">
                <div className=" left-4 right-4 flex justify-between items-center pb-1">
                    <h2 className="text-white text-xl left-4">エピソード</h2>
                    <Link href="./episodes"><div className="text-lime-100 right-4 py-1 px-2 bg-lime-600 rounded-full">もっと見る</div></Link>
                </div>
                <div>
                    {episodes.map((episode) => (
                        <Episode key={episode.id} {...episode} />
                    ))}
                </div>
            </section>
        </div>
    );
}
