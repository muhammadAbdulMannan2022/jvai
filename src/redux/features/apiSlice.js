import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseUri = `http://10.10.13.91:8111/`

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUri }),
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
        }),
        getClientReviews: builder.query({
            query: () => `api/review/get_client_reviews/`
        }),
        getExperts: builder.query({
            query: () => `api/experts/get_all_experts/`
        }),
        momentsInJvai: builder.query({
            query: `api/what_we_do_everyday/get_what_we_do/`
        })
    }),
})

export const { useGetAllCategoriesQuery, useGetJobsQuery, useApplyOnJobMutation, useGetClientReviewsQuery, useGetExpertsQuery, useMomentsInJvaiQuery } = apiSlice
