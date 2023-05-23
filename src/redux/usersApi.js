import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://646459a4127ad0b8f89cd8f5.mockapi.io",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsersByPage: builder.query({
      query: (limit) => `/tweets/?completed=false&page=1&limit=${limit}`,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({body, id} ) => ({
        url: `/tweets/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUpdateUserMutation, useGetUsersByPageQuery } = usersApi;
