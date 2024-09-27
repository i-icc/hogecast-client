import Episode from "@/components/Episode";
import { redirect } from 'next/navigation';
import PodcastHeader from "@/components/PodcastHeader";
import Link from "next/link";
import { getEpisodesByRadioKey, getPodcastById } from "@/lib/firestore";

export default async function Podcast({
    params,
}: {
    params: { radioKey: string };
}) {
    const podcast = await getPodcastById(params.radioKey);
    const episodes = await getEpisodesByRadioKey(params.radioKey, 5);

    // ラジオがない場合ホームへリダイレクト
    if (podcast === null) {
        redirect('/');
    }

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
