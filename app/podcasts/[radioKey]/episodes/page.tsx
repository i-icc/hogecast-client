import Episode from "@/components/Episode";
import PlayerBar from "@/components/PlayerBar";
import { Episode as EpisodeType } from '@/types';
import Link from "next/link";

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
            <div className="fixed top-0 left-0 right-0 p-4 bg-black text-white flex items-center">
                <Link href="..">
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </Link>
                <div className="pl-4 flex items-center">
                    <div>
                        <p className="text-xl">エピソード一覧</p>
                    </div>
                </div>
            </div>

            <section className="p-4 pt-12">
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
