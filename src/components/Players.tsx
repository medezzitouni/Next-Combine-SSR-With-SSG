import styles from "../app/page.module.css"
import { Player, PlayerProps } from "@/globals"

export default function Players({ players }: PlayerProps) {
    return (
        <>
            <div className={styles.container}>
                {players.map((player: Player, i: number) => (
                    <div className={styles.player} key={i}>
                        {player.firstname + ' ' + player.lastname}
                    </div>
                ))}
            </div>
        </>
    )
}
