import Episode from "@/components/Episode";
import { getEpisodesByRadioKey } from "@/lib/firestore";
import Link from "next/link";

export default async function Episodes({
    params,
}: {
    params: { radioKey: string };
}) {
    const episodes = await getEpisodesByRadioKey(params.radioKey, 365);

    return (
        <div className="min-h-screen pb-24">
            <div className="fixed top-0 left-0 right-0 p-4 flex items-center themaBg">
                <Link href="..">
                    <div className="themaC">
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
        </div>
    );
}
