import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './api'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/auth` }),
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