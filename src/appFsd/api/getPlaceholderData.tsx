import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TGetPlaceholderDataApi = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type TCreatePostDto = {
    title: string;
    body: string;
    userId: number;
    file?: File;
};

export const getPlaceholderDataApi = createApi({
    reducerPath: 'PlaceholderDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ULR ?? ''
    }),
    endpoints: builder => ({
        getAllPosts: builder.query<TGetPlaceholderDataApi[], void>({
            query: () => ({
                url: `/posts`,
                method: 'GET'
            })
        }),
        createPost: builder.mutation<TGetPlaceholderDataApi, any>({
            query: newPost => ({
                url: `/posts`,
                method: 'POST',
                body: newPost
            })
        })
    })
});

export const { useGetAllPostsQuery, useCreatePostMutation } =
    getPlaceholderDataApi;
