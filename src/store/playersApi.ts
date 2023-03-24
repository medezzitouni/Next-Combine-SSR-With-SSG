import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { Player  } from "@/globals";


export const playerApi = createApi({
    reducerPath: 'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/"
    }),
    tagTypes: ["player"],
    endpoints: (builder) => ({
        player: builder.query<Player[], string>({
            query: (q) => `player?name=${q}`,
            providesTags: (result, error, search) => [{ type: 'player', search }]
        })
    })
})