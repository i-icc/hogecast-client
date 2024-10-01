'use client'

import { analytics } from "@/lib/firebaseConfig"


const FirebaseAnalytics = () => {
    if (analytics) {
        console.log("あるよ")
    } else {
        console.log("ないよ")
    }
    return <div></div>
}

export default FirebaseAnalytics
