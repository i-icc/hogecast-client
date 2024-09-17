import React from 'react';

const PlayerBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white flex items-center">
            {/* Mock of current playing podcast */}
            <div className="flex items-center">
                <img src="/podcast-thumbnail.jpg" alt="Podcast" className="w-12 h-12 rounded-lg mr-4" />
                <div>
                    <p className="text-sm">サンドウィッチマン ザ・ラジオショー サタデー</p>
                    <p className="text-xs text-gray-400">エピソード6</p>
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
