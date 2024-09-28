import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className="m-1 flex justify-center items-center">
            <Image
                src="./favicon.ico"
                alt="Podcast"
                width={48}
                height={48}
                className="rounded-lg"
            />
        </div>
    );
};

export default Header;
