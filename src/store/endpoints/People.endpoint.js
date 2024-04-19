import { MovieAPI } from "../service/MovieAPI.service";

const PeopleEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPeople: builder.query({
      query: () =>
        "person/popular?api_key=ec801f669051c57582cfefe0e004e430&language=en-US",
        providesTags: ["themoviedb"],
    }),
    getPeopleDetail: builder.query({
      query: (id) =>
        `person/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getKnowFor: builder.query({
      query: (id) =>
        `person/${id}/movie_credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
    getAction: builder.query({
      query: (id) =>
        `person/${id}/combined_credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
        providesTags: ["themoviedb"],
    }),
  }),
});

export const {
  useGetPopularPeopleQuery,
  useGetPeopleDetailQuery,
  useGetKnowForQuery,
  useGetActionQuery,
} = PeopleEndPoints;
