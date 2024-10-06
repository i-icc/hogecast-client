'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default async function Home() {
  const router = useRouter();

  const loadingText = "loading!".split("");

  useEffect(() => {
    // ページが読み込まれてから0.3秒後にリダイレクト
    const timer = setTimeout(() => {
      router.push('/home');
    }, 300);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <div className="mt-3 p-5 flex justify-center items-center">
        <Image
          src="https://storage.googleapis.com/aicast-radio/images/favicon.ico"
          alt="Podcast"
          width={256}
          height={256}
          className="rounded-lg"
        />
      </div>
      <div className='mt-3 p-5 flex justify-center'>
        <div className="w-16 h-16 border-4 border-lime-300 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
      <div className='mt-3 p-5 flex justify-center items-center'>
        <div className="loading-bounce">
          {loadingText.map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .loading-bounce span {
                    display: inline-block;
                    animation: bounce 1s infinite;
                }
            `}</style>
    </div>
  );
}
