import { Podcast } from '@/types';
import React from 'react';

const ProgramInfoModal = (podcast: Podcast) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 text-white rounded-lg w-full max-w-md relative">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold">{podcast.title}</h2>
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-800 text-white px-3 py-1 rounded-lg hover:bg-gray-700 text-sm">
                            完了
                        </button>
                    </div>
                </div>
                <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
                    {podcast.description}
                </div>
            </div>
        </div>
    );
};

export default ProgramInfoModal;