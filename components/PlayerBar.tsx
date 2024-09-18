import React from 'react';
import Image from 'next/image';

const PlayerBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white flex items-center">
            {/* Mock of current playing podcast */}
            <div className="flex items-center">
                <Image
                    src="https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg"
                    alt="Podcast"
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                />
                <div>
                    <p className="text-sm">【トリセツ】これからtimeleszオーディションを観る方へ...他【2024-09-18】</p>
                    <p className="text-xs text-gray-400">2024-06-23</p>
                </div>
            </div>
            {/* Play/Pause Button */}
            <button className="ml-auto">
                <span>▶️</span>
            </button>
        </div>
    );
};

export default PlayerBar;
