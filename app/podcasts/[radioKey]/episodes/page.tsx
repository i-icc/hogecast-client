import Episode from "@/components/Episode";
import PlayerBar from "@/components/PlayerBar";
import { Episode as EpisodeType } from '@/types';

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

export default async function Episodes({
    params,
}: {
    params: { radioKey: string };
}) {
    const episodes = await fetchEpisodes(params.radioKey);

    return (
        <div className="bg-black min-h-screen pb-24">
            <section className="p-4">
                <h2 className="text-white text-lg mb-2">エピソード</h2>
                <div>
                    {episodes.map((episode) => (
                        <Episode key={episode.id} {...episode} />
                    ))}
                </div>
            </section>

            <PlayerBar {...episodes[0]} />
        </div>
    );
}
