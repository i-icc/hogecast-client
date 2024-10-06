'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoadingSpinner = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [router]);

    return (loading &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-16 h-16 border-4 border-lime-300 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
