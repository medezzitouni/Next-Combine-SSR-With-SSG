import { configureStore }  from "@reduxjs/toolkit";
import searchRducer from './slice'



const store = configureStore({
    reducer: {
        search: searchRducer
    },

})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
