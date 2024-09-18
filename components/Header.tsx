import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className="flex items-center p-4 bg-black text-white">
            <Image
                src="https://storage.googleapis.com/aicast-radio/images/aicast-icon.jpg"
                alt="Podcast"
                width={48}
                height={48}
                className="rounded-lg"
            />
            <h1 className="text-lg font-semibold">AI cast</h1>
        </div>
    );
};

export default Header;
