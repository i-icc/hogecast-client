'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface LoadingLinkProps {
    href: string;
    children: React.ReactNode;
    onFn?: () => void;
}

const LoadingLink: React.FC<LoadingLinkProps> = ({ href, children, onFn }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        if (onFn) onFn();
        router.push(href);
    };

    return (
        <>
            {loading && <LoadingSpinner />}
            <button onClick={handleClick} className="">
                {children}
            </button>
        </>
    );
};

export default LoadingLink;
