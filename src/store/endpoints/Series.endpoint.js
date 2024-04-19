import { MovieAPI } from "../service/MovieAPI.service";

const SerieEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingSeries: builder.query({
      query: () =>
        "trending/tv/day?api_key=ec801f669051c57582cfefe0e004e430&language=en-US",
        providesTags: ["themoviedb"],
    }),
    getSeriesDetail: builder.query({
      query: (id) =>
        `tv/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getSeriesCast: builder.query({
      query: (id) =>
        `tv/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getTvSeason: builder.query({
      query: (id) =>
        `tv/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getSeriesReview: builder.query({
      query: (id) =>
        `tv/${id}/reviews?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
        providesTags: ["themoviedb"],
    }),
    getSeriesVedio: builder.query({
      query: (id) =>
        `tv/${id}/videos?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
        providesTags: ["themoviedb"],
    }),
    getRecommendation: builder.query({
      query: (id) =>
        `tv/${id}/recommendations?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=2`,
        providesTags: ["themoviedb"],
    }),
    getCollection: builder.query({
      query: (id) =>
        `collection/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getKeywords: builder.query({
      query: (id) =>
        `tv/${id}/keywords?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getLanguages: builder.query({
      query: () =>
        `configuration/languages?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getAiringTodaySeries: builder.query({
      query: () =>
        `tv/airing_today?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getPopularSeries: builder.query({
      query: () =>
        `tv/popular?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getTopRatedSeries: builder.query({
      query: () =>
        `tv/top_rated?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getOnTVSeries: builder.query({
      query: () =>
        `tv/on_the_air?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetTrendingSeriesQuery,
  useGetSeriesDetailQuery,
  useGetSeriesCastQuery,
  useGetSeriesReviewQuery,
  useGetSeriesVedioQuery,
  useGetAiringTodaySeriesQuery,
  useGetPopularSeriesQuery,
  useGetOnTVSeriesQuery,
  useGetTopRatedSeriesQuery,
} = SerieEndPoints;
