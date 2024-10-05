import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/redux/provider";
import PlayerBar from "@/components/PlayerBar";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

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
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon512_maskable.png"></link>
        <meta name="theme-color" content="#85ff9d" />
        <meta name="google-adsense-account" content="ca-pub-7491603780665397"></meta>
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Providers>
          <FirebaseAnalytics />
          {children}
          <PlayerBar />
        </Providers>
      </body>
    </html>
  );
}
