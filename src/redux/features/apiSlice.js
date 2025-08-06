import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://10.10.13.91:8111/' }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'api/category/get_all_categories/',
        }),
        getJobs: builder.query({
            query: () => `api/jobs/all_job/`,
        }),
        applyOnJob: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "api/jobs/submit_application/",
                body: data
            })
        })
    }),
})

export const { useGetAllCategoriesQuery, useGetJobsQuery, useApplyOnJobMutation } = apiSlice
