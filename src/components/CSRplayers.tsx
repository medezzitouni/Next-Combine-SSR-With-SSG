"use client"

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import { RootState, AppDispatch } from "@/store"
import { setSearch } from "@/store/slice"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { FC, useEffect } from "react"
import SearchInput from "./SearchInput"
import Players from "./Players"
import { Player } from "@/globals"
import { playerApi } from "@/store/playersApi"

const CSRPlayers: FC<any> = () => {
    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.search.search);
    const players = useAppSelector((state) => state.search.startUpPlayer);
    const data = useAppSelector((state) => state.playerApi.queries[`player("${search}")`]?.data as Player[]);
    
    useEffect(() => {
        dispatch(playerApi.endpoints.player.initiate(search));
    }, [dispatch, search])
    return (
        <>
            <SearchInput
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <div style={{ fontSize: "22px" }}>
                This <strong>Data</strong> is coming from a{" "}
                <strong>Client-Side</strong> Component
            </div>
            <Players players={search.length ? data ?? [] : players} />
        </>
    )
}

export default CSRPlayers
