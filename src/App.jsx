import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import {
  AiringTodaySeriesPage,
  CastPage,
  CollectionPage,
  CompaniesSearchPage,
  FavoriteMoviePage,
  FavoritePage,
  FavoriteTvPage,
  HomePage,
  KeywordSearchPage,
  MovieDetailPage,
  MovieSearchPage,
  MoviesPage,
  NetworkSearchPage,
  NowplayingMoviePage,
  OnTVSeriesPage,
  PeopleDetailPage,
  PeoplePage,
  PeopleSearchPage,
  PopularMoviePage,
  RatingPage,
  SearchPage,
  SeriesDetailPage,
  SeriesPage,
  SignInPage,
  TopRatedSeriesPage,
  TopratedMoviePage,
  TvShowSearchPage,
  UpcomingMoviePage,
  WatchListTvPage,
  WatchListsMoviePage,
  WatchListsPage,
} from "./Page";
import PopularSeriePage from "./Page/Series/Popular.serie.page";
import CollectionSearchPage from "./Page/Search/Collection.search.page";
import ReviewPage from "./Page/Review/Review.page";
import NotFoundPage from "./Page/NotFound/NotFound.page";
import ListsPage from "./Page/AuthenticatedPage/Lists/Lists.page";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("sessionID") &&
      localStorage.getItem("accountID")
    ) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [localStorage.getItem("sessionID")]);

  return (
    <div className="custom-container py-3">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* not found */}
        <Route path="/*" element={<NotFoundPage />} />

        {/* auth */}
        <Route path="/sign-in" element={<SignInPage />} />

        {/* movies */}
        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<PopularMoviePage />} />
          <Route path="upcoming" element={<UpcomingMoviePage />} />
          <Route path="toprated" element={<TopratedMoviePage />} />
          <Route path="nowplaying" element={<NowplayingMoviePage />} />
        </Route>

        {/* series route */}
        <Route path="/series" element={<SeriesPage />}>
          <Route index element={<PopularSeriePage />} />
          <Route path="airing" element={<AiringTodaySeriesPage />} />
          <Route path="toprated" element={<TopRatedSeriesPage />} />
          <Route path="onTV" element={<OnTVSeriesPage />} />
        </Route>

        {/* search route */}
        <Route path="/search" element={<SearchPage />}>
          <Route path="tv/:name" element={<TvShowSearchPage />} />
          <Route path="movie/:name" element={<MovieSearchPage />} />
          <Route path="person/:name" element={<PeopleSearchPage />} />
          <Route path="collection/:name" element={<CollectionSearchPage />} />
          <Route path="companies/:name" element={<CompaniesSearchPage />} />
          <Route path="networks/:name" element={<NetworkSearchPage />} />
          <Route path="keywords/:name" element={<KeywordSearchPage />} />
        </Route>

        {/* people */}
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people_detail/:id" element={<PeopleDetailPage />} />

        {/* detail */}
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/movie_detail/:id" element={<MovieDetailPage />} />
        <Route path="/movie_detail/:id/reviews" element={<ReviewPage />} />
        <Route path="/serie_detail/:id" element={<SeriesDetailPage />} />
        <Route path="/cast" element={<CastPage />} />

        {/* favorite and watchlist */}

        <Route
          path="/watchlist"
          element={isAuth ? <WatchListsPage /> : <SignInPage />}
        >
          <Route path="tv" element={<WatchListTvPage />} />
          <Route index element={<WatchListsMoviePage />} />
        </Route>
        <Route
          path="/favorite"
          element={isAuth ? <FavoritePage /> : <SignInPage />}
        >
          <Route path="tv" element={<FavoriteTvPage />} />
          <Route index element={<FavoriteMoviePage />} />
        </Route>
        <Route
          path="/lists"
          element={isAuth ? <ListsPage /> : <SignInPage />}
        />
        <Route
          path="/rating"
          element={isAuth ? <RatingPage /> : <SignInPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
