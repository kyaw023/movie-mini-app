import { MovieAPI } from "../service/MovieAPI.service";

const SearchEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMultiSearch: builder.query({
      query: (name) =>
        `search/multi?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getMovieSearch: builder.query({
      query: (name) =>
        `search/movie?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getTVSearch: builder.query({
      query: (name) =>
        `search/tv?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getSearchPeople: builder.query({
      query: (name) =>
        `search/person?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getSearchCollection: builder.query({
      query: (name) =>
        `search/collection?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getSearchCompany: builder.query({
      query: (name) =>
        `search/company?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
    getSearchKeyword: builder.query({
      query: (name) =>
        `search/keyword?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
        providesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetMultiSearchQuery,
  useGetMovieSearchQuery,
  useGetTVSearchQuery,
  useGetSearchPeopleQuery,
  useGetSearchCollectionQuery,
  useGetSearchCompanyQuery,
  useGetSearchKeywordQuery,
} = SearchEndpoints;
