import { MovieAPI } from "../service/MovieAPI.service";
const SearchEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAccountDetail: builder.query({
      query: (sessionID) =>
        `account?session_id=${sessionID}&api_key=ec801f669051c57582cfefe0e004e430`,
      providesTags: ["themoviedb"],
    }),
    getWatchList: builder.query({
      query: (name) =>
        `account/18543278/watchlist/${name}?session_id=${localStorage.getItem(
          "sessionID"
        )}&api_key=ec801f669051c57582cfefe0e004e430`,

      providesTags: ["themoviedb"],
    }),
    addToWatchList: builder.mutation({
      query: (arg) => ({
        url: `account/18543278/watchlist?session_id=${arg?.sessionID}&api_key=ec801f669051c57582cfefe0e004e430`,
        method: "POST",
        body: {
          media_type: arg.media_type,
          media_id: arg.media_id,
          watchlist: true,
        },
      }),
      invalidatesTags: ["themoviedb"],
    }),
    getFavorite: builder.query({
      query: (name) =>
        `account/18543278/favorite/${name}?session_id=${localStorage.getItem(
          "sessionID"
        )}&api_key=ec801f669051c57582cfefe0e004e430`,

      providesTags: ["themoviedb"],
    }),
    addToFavorite: builder.mutation({
      query: (arg) => ({
        url: `account/18543278/favorite?session_id=${arg?.sessionID}&api_key=ec801f669051c57582cfefe0e004e430`,
        method: "POST",
        body: {
          media_type: arg.media_type,
          media_id: arg.media_id,
          favorite: true,
        },
      }),
      invalidatesTags: ["themoviedb"],
    }),
    getCreateLists: builder.query({
      query: () =>
        `account/18543278/lists?session_id=${localStorage.getItem(
          "sessionID"
        )}&api_key=ec801f669051c57582cfefe0e004e430`,

      providesTags: ["themoviedb"],
    }),
    getRating: builder.query({
      query: (name) =>
        `account/18543278/rated/${name}?session_id=${localStorage.getItem(
          "sessionID"
        )}&api_key=ec801f669051c57582cfefe0e004e430`,

      providesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetAccountDetailQuery,
  useGetWatchListQuery,
  useAddToWatchListMutation,
  useGetFavoriteQuery,
  useAddToFavoriteMutation,
  useGetCreateListsQuery,
  useGetRatingQuery,
} = SearchEndpoints;
