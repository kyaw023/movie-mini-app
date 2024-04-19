import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers, { getState }) => {
      const sessionID = localStorage.getItem("sessionID");
      if (sessionID) {
        headers.set("Authorization", `Bearer ${sessionID}`);
      }
      return headers;
    },
  }),
  tagTypes: ["themoviedb"],
  endpoints: (builder) => ({}),
});
