"use client";

import { trackInstallAppEvent } from "@/lib/firebaseAnalytics";
import React, { useEffect, useState } from "react";

interface Props {
    message?: string;
    disabledMessage?: string;
}

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const InstallButton = ({
    message = "今すぐインストール！",
}: Props) => {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault(); // モバイルでのミニ情報バーを防ぐ
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsInstallable(true);
        };

        // PWAがサポートされているかを確認
        if ("beforeinstallprompt" in window) {
            setIsSupported(true);
            window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const onInstallClick = async () => {
        if (!deferredPrompt) {
            return;
        }

        setLoading(true);
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        const isAccepted = choiceResult.outcome === "accepted";
        trackInstallAppEvent(isAccepted);

        if (isAccepted) {
            setDeferredPrompt(null);
            setIsInstallable(false);
        } else {
            setIsInstallable(true);
        }
        setLoading(false);
    };

    return (
        <>
            {isSupported ? (
                <button
                    onClick={onInstallClick}
                    className="rounded-full themaBgL notThemaC px-5 py-2 font-semibold no-underline"
                    disabled={!isInstallable || loading}
                    aria-live="polite"
                >
                    {loading ? "処理中..." : isInstallable ?? message}
                </button>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default InstallButton;
