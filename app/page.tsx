import Header from './components/Header';
import PodcastCard from './components/PodcastCard';
import Episode from '@/components/Episode';
import PlayerBar from '@/components/PlayerBar';
import { Podcast as PodcastType, Episode as EpisodeType } from '@/types';
import Link from 'next/link';

// サーバー側でデータをフェッチする
async function fetchPodcasts(): Promise<PodcastType[]> {
  // APIやデータベースからデータを取得する（ここではモックデータを使用）
  return [
    { image: 'https://storage.googleapis.com/aicast-radio/images/aicast-icon.jpg', title: 'ai-cast', description: 'hoge cast', id: "hoge-cast", description_html: '<a hrel="google.com">hogeyou</a>' },
    { image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg', title: 'note cast', description: 'note cast', id: "note-cast", description_html: '<a hrel="google.com">hogeyou</a>' },
  ];
}

async function fetchEpisodes(): Promise<EpisodeType[]> {
  return [
    {
      title: '旅ノートの作り方...他【2024-09-18】',
      release_datetime: '2024-09-18',
      duration: '00:05:54',
      description: '説明文',
      description_html: '説明文<br>html tag あり<a href="google.com">link</a>',
      image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg',
      id: 'note-cast-2024-09-18',
      radio_key: 'note-cast',
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

export default async function Home() {
  const podcasts = await fetchPodcasts(); // サーバーコンポーネント内でデータフェッチ
  const episodes = await fetchEpisodes();

  return (
    <div className="bg-black min-h-screen pb-24">
      <Header />

      {/* Podcasts Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">番組</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {podcasts.map((podcast) => (
            <Link key={podcast.id} href={`/podcasts/${podcast.id}`} >
              < PodcastCard key={podcast.id} {...podcast} />
            </Link>
          ))}
        </div>
      </section>

      {/* Episodes Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">最新エピソード</h2>
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
