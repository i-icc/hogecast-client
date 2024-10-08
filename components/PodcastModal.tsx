import { Podcast } from '@/types';
import React from 'react';
import parse from 'html-react-parser';

interface PodcastModalProps extends Podcast {
    onClose: () => void;
}

const PodcastModal: React.FC<PodcastModalProps> = ({ title, description_html, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            onClick={onClose}
        >
            <div
                className="w-full h-[90%] themaBg rounded-t-2xl shadow-lg overflow-y-auto relative border-t-2 border-gray-400"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-600">
                    <div className="flex-1 text-center">
                        <h3 className="text-xl font-semibold">番組について</h3>
                    </div>
                    <button
                        className="themaL hover:text-lime-50  pr-2"
                        onClick={onClose}
                    >
                        完了
                    </button>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="text-base leading-relaxed">{parse(description_html)}</div>
                </div>
            </div>
        </div>
    );
};

export default PodcastModal;
