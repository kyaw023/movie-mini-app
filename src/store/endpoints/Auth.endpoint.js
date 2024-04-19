import { MovieAPI } from "../service/MovieAPI.service";

const AuthEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRequestToken: builder.query({
      query: () => ({
        url: `authentication/token/new?api_key=ec801f669051c57582cfefe0e004e430`,
        method: "GET",
      }),
      providesTags: ["themoviedb"],
    }),
    getauthenticateUser: builder.mutation({
      query: ({ username, password, requestToken }) => ({
        url: `authentication/token/validate_with_login?api_key=ec801f669051c57582cfefe0e004e430`,
        method: "POST",
        body: {
          username,
          password,
          request_token: requestToken, // Replace with actual token
        },
      }),
    }),
    createSession: builder.mutation({
      query: ({ requestToken }) => ({
        url: `/authentication/session/new?api_key=ec801f669051c57582cfefe0e004e430`,
        method: "POST",
        body: {
          request_token: requestToken,
        },
      }),
    }),
    logout: builder.mutation({
      query: (sessionID) => ({
        url: `authentication/session&api_key=ec801f669051c57582cfefe0e004e430`,
        method: "DELETE",
        body: {
          session_id: sessionID,
        },
      }),
      invalidatesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetRequestTokenQuery,
  useGetauthenticateUserMutation,
  useCreateSessionMutation,
  useLogoutMutation,
} = AuthEndpoints;
