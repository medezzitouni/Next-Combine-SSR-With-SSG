import { configureStore }  from "@reduxjs/toolkit";
import searchRducer from './slice'
import { playerApi } from "./playersApi";



const store = configureStore({
    reducer: {
        search: searchRducer,
        playerApi: playerApi.reducer
    },
    middleware(getDefaultMiddlware){
        return getDefaultMiddlware().concat(playerApi.middleware)
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
