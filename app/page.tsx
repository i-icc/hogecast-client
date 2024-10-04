import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import Episode from '@/components/Episode';
import { getEpisodes, getPodcasts } from '@/lib/firestore';
import { Episode as EpisodeType } from '@/types';
import Link from 'next/link';
import { NextResponse } from 'next/server';

export async function getEpisodesFromFirebase(num: number) {
  const episodes = await getEpisodes(num);
  const response = NextResponse.json({ episodes: episodes });
  response.headers.set('Cache-Control', 'public, max-age=21600, stale-while-revalidate=3600'); // 6 hours cache, 1 hour stale
  return response;
}

export default async function Home() {
  // サーバーコンポーネント内でデータフェッチ
  const podcasts = await getPodcasts();
  podcasts.sort((a, b) => a.sort - b.sort);
  const episodesResponse = await getEpisodesFromFirebase(5);
  const episodesData = await episodesResponse.json();
  const episodes: EpisodeType[] = episodesData.episodes;

  return (
    <div className="min-h-screen pb-24">
      <Header />

      {/* Podcasts Section */}
      <section className="p-4">
        <h2 className="text-lg mb-2 font-bold">番組</h2>
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
        <h2 className="text-lg mb-2 font-bold">最新エピソード</h2>
        <div>
          {episodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
      </section>

      {/* App Section */}
      <section className="p-4">
        <h2 className="text-lg mb-2 font-bold">このサービスについて</h2>
        <div className='subColer'>
          <p>AI が日本で話題な記事を要約してラジオとして提供するサービスです。</p>
          <p>一駅分の移動の時間でトレンドをキャッチ！</p>
        </div>
        <h3 className='text-lg my-2'>各種 podcast でも配信中！</h3>
        <div>
          <ul>
            <li><a href="https://music.amazon.co.jp/podcasts/2c53d14b-5c3b-463a-b451-66733ddb3784/ai-cast" target='_blank'>Amazon podcast</a></li>
            <li><a href="https://podcasts.apple.com/us/podcast/ai-cast/id1767191915" target='_blank'>Apple podcast</a></li>
            <li><a href="https://open.spotify.com/show/0SeH7yG5doIsdypO1zqUd3?si=cISqNAMLRvedlqpRSr9-Pw" target='_blank'>Spotify podcast</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLhnPyWxtaPqx83w7OTDK6msSbP2x0ca3L" target='_blank'>Youtube podcast</a></li>
          </ul>
        </div>
        <div className='flex-1 text-center border-t border-gray-500 my-3 p-3'>
          © 2024 <a href="https://i-icc.github.io/" target='_blank'>某猫/i-icc</a>. All rights reserved.
        </div>
      </section>
    </div>
  );
}
