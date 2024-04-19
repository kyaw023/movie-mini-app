import { MovieAPI } from "../service/MovieAPI.service";

const MovieEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovie: builder.query({
      query: (pageName) =>
        `movie/popular?sort_by=popularity.aesc&api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=${pageName}`,
      providesTags: ["themoviedb"],
    }),
    getMovieDetail: builder.query({
      query: (id) =>
        `movie/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
      providesTags: ["themoviedb"],
    }),
    getTopBilledCast: builder.query({
      query: (id) =>
        `movie/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
      providesTags: ["themoviedb"],
    }),
    getMovieReviews: builder.query({
      query: (id) =>
        `movie/${id}/reviews?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
      providesTags: ["themoviedb"],
    }),
    getMovieVedio: builder.query({
      query: (id) =>
        `movie/${id}/videos?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
      providesTags: ["themoviedb"],
    }),
    getRecommendation: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=2`,
      providesTags: ["themoviedb"],
    }),
    getCollection: builder.query({
      query: (id) =>
        `collection/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
      providesTags: ["themoviedb"],
    }),
    getKeywords: builder.query({
      query: (id) =>
        `movie/${id}/keywords?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
      providesTags: ["themoviedb"],
    }),

    getLanguages: builder.query({
      query: () =>
        `configuration/languages?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
      providesTags: ["themoviedb"],
    }),
    getTrending: builder.query({
      query: (name) =>
        `trending/movie/${name}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=${"1"}`,
      providesTags: ["themoviedb"],
    }),

    getGenres: builder.query({
      query: (name) =>
        `genre/${name}/list?api_key=ec801f669051c57582cfefe0e004e430`,
      providesTags: ["themoviedb"],
    }),
    getNowPlayingMovie: builder.query({
      query: () =>
        `movie/now_playing?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
      providesTags: ["themoviedb"],
    }),
    getTopRatedMovie: builder.query({
      query: () =>
        `movie/top_rated?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
      providesTags: ["themoviedb"],
    }),
    getUpcomingMovie: builder.query({
      query: () =>
        `movie/upcoming?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
      providesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetMovieDetailQuery,
  useGetGenresQuery,
  useGetTopBilledCastQuery,
  useGetMovieReviewsQuery,
  useGetMovieVedioQuery,
  useGetCollectionQuery,
  useGetRecommendationQuery,
  useGetKeywordsQuery,
  useGetLanguagesQuery,
  useGetTrendingQuery,
  useGetNowPlayingMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
} = MovieEndPoints;
