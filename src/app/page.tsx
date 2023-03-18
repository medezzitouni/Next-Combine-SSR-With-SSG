import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
import axios from "axios"
import { Player } from "@/globals"
import store from "@/store"
import { setStartUpPlayers } from "@/store/slice"
import SSRPlayers from "./components/SSRPlayers"

// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
    const { NEXT_PUBLIC_BACKEND_URL } = process.env
    const res = await axios.get(`${NEXT_PUBLIC_BACKEND_URL}/api/player`)
    // const players = res.data;
    store.dispatch(setStartUpPlayers(res.data))

    return (
        <main className={styles.main}>
            <h1>Player</h1>
            <SSRPlayers />
        </main>
    )
}
