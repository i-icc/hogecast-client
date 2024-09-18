import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import Episode from '../components/Episode';
import PlayerBar from '../components/PlayerBar';

const mockPodcasts = [
  { image: 'https://storage.googleapis.com/aicast-radio/images/aicast-icon.jpg', title: 'ai-cast', description: 'hoge cast' },
  { image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg', title: 'note cast', description: 'note cast' },
];

const mockEpisodes = [
  { title: '旅ノートの作り方...他【2024-09-18】', date: '2024-09-18', duration: '00:05:54' },
  { title: '【トリセツ】これからtimeleszオーディションを観る方へ...他【2024-09-18】', date: '2024-09-18', duration: '00:05:54' },
];

const Home = () => {
  return (
    <div className="bg-black min-h-screen pb-24">
      <Header />

      {/* Podcasts Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">番組</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {mockPodcasts.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>
      </section>

      {/* Episodes Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">最新エピソード</h2>
        <div>
          {mockEpisodes.map((episode, index) => (
            <Episode key={index} {...episode} />
          ))}
        </div>
      </section>

      <PlayerBar />
    </div>
  );
};

export default Home;
