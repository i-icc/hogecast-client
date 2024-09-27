import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/redux/provider";
import PlayerBar from "@/components/PlayerBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI cast",
  description: "AI が日本で話題な記事を要約してラジオ・podcastとして提供するサイトです。一駅分の移動の時間でトレンドをキャッチ！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const episode = {
    title: '旅ノートの作り方...他【2024-09-18】',
    release_datetime: '2024-09-18',
    duration: '00:05:54',
    description: '説明文',
    description_html: '説明文<br>html tag あり<a href="https://google.com">link</a>',
    image: 'https://storage.googleapis.com/aicast-radio/images/note-cast-icon.jpg',
    id: 'note-cast-2024-09-18',
    radio_key: 'note-cast',
    sound_url: 'https://storage.googleapis.com/aicast-radio/note/radio_2024-09-18.mp3'
  };

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Providers>
          {children}
          <PlayerBar {...episode} />
        </Providers>
      </body>
    </html>
  );
}
