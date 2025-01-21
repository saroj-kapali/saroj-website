import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getMockUserApi = createApi({
  reducerPath: "getMockUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66d7d89d37b1cadd80527051.mockapi.io/api/v1/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getMockUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    deleteMockUsers: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    updateMockUsers: builder.mutation({
      query: ({ id, ...data }) => (
        console.log(id, data),
        {
          url: `users/${id}`,
          method: "PUT",
          body: data,
        }
      ),
    }),
  }),
});
export const {
  useGetMockUsersQuery,
  useDeleteMockUsersMutation,
  useUpdateMockUsersMutation,
} = getMockUserApi;
