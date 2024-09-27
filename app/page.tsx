import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import Episode from '@/components/Episode';
import { getEpisodes, getPodcasts } from '@/lib/firestore';
import Link from 'next/link';

export default async function Home() {
  // サーバーコンポーネント内でデータフェッチ
  const podcasts = await getPodcasts();
  const episodes = await getEpisodes(5);

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
    </div>
  );
}
