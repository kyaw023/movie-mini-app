import { MovieAPI } from "../service/MovieAPI.service";

const DiscoverEndpoint = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDiscoverMovie: builder.query({
      query: ({ pageName, languageName, sortName }) =>
        `discover/movie?api_key=ec801f669051c57582cfefe0e004e430&include_adult=false&include_video=false&language=${languageName}&page=${pageName}&sort_by=${sortName}`,
      providesTags: ["themoviedb"],
    }),
    getDiscoverTv: builder.query({
      query: ({ pageName, languageName, sortName }) =>
        `discover/tv?api_key=ec801f669051c57582cfefe0e004e430&include_adult=false&include_video=false&language=${languageName}&page=${pageName}&sort_by=${sortName}`,
      providesTags: ["themoviedb"],
    }),
  }),
});

export const { useGetDiscoverMovieQuery, useGetDiscoverTvQuery } =
  DiscoverEndpoint;
