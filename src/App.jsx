import React, { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
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
import { NavbarComponent } from "./Components";

import DiscoverPage from "./Page/DiscoverPage/Discover.page";
import DiscoverMoviePage from "./Page/DiscoverPage/DiscoverMovie.page";
import DiscoverTvPage from "./Page/DiscoverPage/DiscoverTv.page";

const App = () => {
  const sessionID = localStorage.getItem("sessionID");
  const accountID = localStorage.getItem("accountID");
  const [isAuth, setIsAuth] = useState(!!sessionID && !!accountID);

  useEffect(() => {
    if (sessionID && accountID) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className="custom-container py-3">
      <NavbarComponent />
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

        <Route path="/discover" element={<DiscoverPage />}>
          <Route index element={<DiscoverMoviePage />} />
          <Route path="tv" element={<DiscoverTvPage />} />
        </Route>

        {/* detail */}
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/movie_detail/:id" element={<MovieDetailPage />} />
        <Route path="/movie_detail/:id/reviews" element={<ReviewPage />} />
        <Route path="/serie_detail/:id" element={<SeriesDetailPage />} />
        <Route path="/cast" element={<CastPage />} />

        {/* favorite and watchlist */}

        <Route
          path="/watchlist"
          element={isAuth ? <WatchListsPage /> : <Navigate to={"/sign-in"} />}
        >
          <Route path="tv" element={<WatchListTvPage />} />
          <Route index element={<WatchListsMoviePage />} />
        </Route>
        <Route
          path="/favorite"
          element={isAuth ? <FavoritePage /> : <Navigate to={"/sign-in"} />}
        >
          <Route path="tv" element={<FavoriteTvPage />} />
          <Route index element={<FavoriteMoviePage />} />
        </Route>
        <Route
          path="/lists"
          element={isAuth ? <ListsPage /> : <Navigate to={"/sign-in"} />}
        />
        <Route
          path="/rating"
          element={isAuth ? <RatingPage /> : <Navigate to={"/sign-in"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
