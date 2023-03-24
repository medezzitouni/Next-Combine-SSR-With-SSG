import styles from "./page.module.css"
import axios from "axios"
import { Player } from "@/globals"
import store from "@/store"
import { setStartUpPlayers } from "@/store/slice"
import SSRPlayers from "@/components/SSRPlayers"
import StoreProvider from "@/store/Provider"
import CSRPlayers from "@/components/CSRplayers"
import ClientStorePreloader from "@/components/ClientStorePreloader"

export default async function Home() {
    const { NEXT_PUBLIC_BACKEND_URL } = process.env
    const res = await axios.get(`${NEXT_PUBLIC_BACKEND_URL}/api/player`)
    const players: Player[] = res.data

    // we dont have access to hook in Server Side Components
    // we use store.dispatch directly
    store.dispatch(setStartUpPlayers(players))

    return (
        <main className={styles.main}>
            <h1>Player</h1>
            {/* Load the initial data from the Server-Side Component */}
            <ClientStorePreloader data={players} />
            <StoreProvider>
                <CSRPlayers />
            </StoreProvider>
            <div style={{ fontSize: "22px" }}>
                The Following <strong>Data</strong> is coming from a <strong>Server-Side</strong> Component
            </div>
            <SSRPlayers />
        </main>
    )
}
