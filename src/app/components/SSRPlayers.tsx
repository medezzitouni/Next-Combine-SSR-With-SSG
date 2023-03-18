import styles from "../page.module.css"

import axios from "axios"
import { Player } from "@/globals"
import store from "@/store"
import { setStartUpPlayers } from "@/store/slice"

export default function SSRPlayers() {
    const players = store.getState().search.startUpPlayer

    return (
        <>
            <div className={styles.container}>
                {players.map((player: Player, i: number) => (
                    <>
                        <span className={styles.player} key={i}>
                            {player.firstname}
                        </span>
                    </>
                ))}
            </div>
        </>
    )
}
