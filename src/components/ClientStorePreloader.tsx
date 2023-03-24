'use client';

import { useRef } from "react";
import store from "@/store";
import { setStartUpPlayers } from "@/store/slice";
import { Player } from "@/globals";

export default function ClientStorePreloader({ data }: { data: Player[] }){
    const loaded = useRef(false);

    if(!loaded.current){
        store.dispatch(setStartUpPlayers(data));
        loaded.current = true;
    }
    return null;
}