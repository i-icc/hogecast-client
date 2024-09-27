import { Episode } from '@/types';
import React from 'react';
import parse from 'html-react-parser';

interface EpisodeModalProps extends Episode {
    onClose: () => void;
}

const EpisodeModal: React.FC<EpisodeModalProps> = ({ title, description_html, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            onClick={onClose}
        >
            <div
                className="w-full h-[90%] bg-black rounded-t-2xl shadow-lg overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex-1 text-center">
                        <h3 className="text-xl font-semibold text-white">エピソードについて</h3>
                    </div>
                    <button
                        className="text-lime-200 hover:text-lime-50 pr-2"
                        onClick={onClose}
                    >
                        完了
                    </button>
                </div>
                <div className="p-5 text-white">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="text-base leading-relaxed">{parse(description_html)}</div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeModal;
