import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.73:3000/api/auth' }),
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/login',
        method: 'POST',
        body: query,
      })
    }),

    userRegister: builder.mutation({
      query: (query) => ({
        url: '/register',
        method: 'POST',
        body: query,
      })
    }),

    userLogout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    })
  })
})


export const { useUserLoginMutation, useUserRegisterMutation, useUserLogoutMutation } = authApi