"use client"

import { SearchProps } from "@/globals"
import style from '../app/page.module.css';

export default function SearchInput({ ...props }: SearchProps) {

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid white",
                    borderRadius: "10px",
                }}
            >
                <div
                    style={{
                        padding: 6,
                        paddingLeft: 10,
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    🔍
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    style={{
                        paddingRight: "30px",
                        paddingTop: "5px ",
                        paddingBottom: "5px ",
                        border: 0,
                        backgroundColor: 'inherit'
                    }}
                    className={style.searchInput}
                    {...props}
                />
            </div>
        </>
    )
}
