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
    disabledMessage = "インストール\nありがとうございます！",
}: Props) => {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e: Event) => {
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsInstallable(true);
        });
    }, []);

    const onInstallClick = async () => {
        if (!deferredPrompt) {
            return;
        }

        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        const isAccepted = choiceResult.outcome === "accepted"
        trackInstallAppEvent(isAccepted);
        if (isAccepted) {
            setDeferredPrompt(null);
            setIsInstallable(false);
        } else {
            setIsInstallable(true);
        }
    };

    return (
        <button
            onClick={() => void onInstallClick()}
            className="rounded-full themaBgL notThemaC px-5 py-2 font-semibold no-underline"
            disabled={!isInstallable}
        >
            {isInstallable ? message : disabledMessage}
        </button>
    );
};

export default InstallButton;