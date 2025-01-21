import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mockUserApi = createApi({
  reducerPath: "mockUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66d7d89d37b1cadd80527051.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    postContact: builder.mutation({
      query: (contactData) => ({
        url: "users",
        method: "POST",
        body: contactData,
      }),
    }),
  }),
});

export const { usePostContactMutation } = mockUserApi;
