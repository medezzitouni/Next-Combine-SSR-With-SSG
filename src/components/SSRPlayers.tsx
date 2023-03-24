import store from "@/store"
import Players from "./Players"


export default function SSRPlayers() {

    return (
        <>
            <Players players={store.getState().search.startUpPlayer} />
        </>
    )
}
