import React from "react";
import { useParams } from "react-router-dom";
import {
  LoadingComponent,
  MediaComponent,
  MovieDetailCard,
  NavbarComponent,
  ReviewsComponent,
  TopBilledCastComponent,
} from "../../Components";
import {
  useGetSeriesCastQuery,
  useGetSeriesDetailQuery,
  useGetSeriesReviewQuery,
  useGetSeriesVedioQuery,
} from "../../store/endpoints/Series.endpoint";
import SeasonsComponent from "../../Components/SerieComponents/Seasons.component";

const SeriesDetailPage = () => {
  const { id } = useParams();
  const { data: seriesDetail, isLoading } = useGetSeriesDetailQuery(id);
  const { data: seriesCast } = useGetSeriesCastQuery(id);
  const { data: seriesReview } = useGetSeriesReviewQuery(id);
  const { data: seriesVedios } = useGetSeriesVedioQuery(id);

  return (
    <div>
      <LoadingComponent isLoading={isLoading}>
        <div className=" px-2 md:px-0">
          {/* DetailCard */}
          <MovieDetailCard data={seriesDetail} media_type="tv" />

          {/* series card */}
          <div className=" ">
            <h1 className=" text-2xl font-semibold text-slate-200 my-10">
              Series Cast
            </h1>
            <TopBilledCastComponent data={seriesCast} />
          </div>

          {/* season */}

          <div className=" mt-10">
            <SeasonsComponent seasons={seriesDetail?.seasons} />
          </div>

          {/* review */}
          <ReviewsComponent data={seriesReview} />

          {/* social */}
          <MediaComponent vedios={seriesVedios} />
        </div>
      </LoadingComponent>
    </div>
  );
};

export default SeriesDetailPage;
