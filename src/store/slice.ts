import { Player } from '../globals';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice }  from "@reduxjs/toolkit"

interface State{
    search: string;
    startUpPlayer: Player[]
}

const initialState: State = {
    search: "",
    startUpPlayer: []
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setStartUpPlayers: (state, action: PayloadAction<Player[]>) => {
            state.startUpPlayer = action.payload;
        }
    }
})

export const { setSearch, setStartUpPlayers } = searchSlice.actions;

export default searchSlice.reducer;