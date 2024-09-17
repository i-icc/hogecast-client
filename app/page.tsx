import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import Episode from '../components/Episode';
import PlayerBar from '../components/PlayerBar';

const mockPodcasts = [
  { image: 'https://storage.googleapis.com/aicast-radio/images/aicast-icon.jpg', title: 'サンドウィッチマン ザ・ラジオショー', description: 'hoge cast' },
  { image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg', title: '霜降り明星のオールナイトニッポン', description: 'note cast' },
];

const mockEpisodes = [
  { title: 'ナインティナインのオールナイトニッポン', date: '2023/04/27', duration: '1時間 35分' },
  { title: 'あののオールナイトニッポン', date: '2023/04/04', duration: '1時間 4分' },
];

const Home = () => {
  return (
    <div className="bg-black min-h-screen pb-24">
      <Header />

      {/* Podcasts Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">ポッドキャストと番組</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {mockPodcasts.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>
      </section>

      {/* Episodes Section */}
      <section className="p-4">
        <h2 className="text-white text-lg mb-2">エピソード</h2>
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
