import React from "react";
import {
  useGetCollectionQuery,
  useGetKeywordsQuery,
  useGetMovieDetailQuery,
  useGetMovieReviewsQuery,
  useGetMovieVedioQuery,
  useGetRecommendationQuery,
  useGetTopBilledCastQuery,
} from "../../store/endpoints/Movie.endpoint";
import { Link, useParams, useNavigate } from "react-router-dom";

import { Button } from "../../Components/ui/button";

import { Facebook, Twitter, Instagram } from "lucide-react";
import {
  LoadingComponent,
  MediaComponent,
  MovieDetailCard,
  NavbarComponent,
  ReviewsComponent,
  TopBilledCastComponent,
} from "../../Components";
import { Badge } from "../../Components/ui/badge";

const MovieDetailPage = () => {
  const { id } = useParams();

  const nav = useNavigate();

  const { isError, data, isLoading } = useGetMovieDetailQuery(id);
  const { data: recommendataionData } = useGetRecommendationQuery(id);
  const { data: topBilledCast } = useGetTopBilledCastQuery(id);
  const { data: reviews } = useGetMovieReviewsQuery(id);
  const { data: vedios } = useGetMovieVedioQuery(id);

  const { data: keywords } = useGetKeywordsQuery(id);

  const navigateHandler = (id) => {
    nav(`/collection/${id}`, { state: topBilledCast });
  };

  return (
    <div>
      <LoadingComponent isLoading={isLoading}>
        <div className=" px-2 md:px-0">
          {/* DetailCard */}
          <MovieDetailCard data={data} media_type={"movie"} />

          {/* TopBilledCast */}
          <div className="h-screen mt-10 grid md:grid-cols-4 grid-cols-1 gap-10">
            <div className=" col-span-3">
              <div>
                <h1 className=" text-slate-50 text-2xl mb-4">
                  Top Billed Cast
                </h1>
                <TopBilledCastComponent data={topBilledCast} />
              </div>

              {/* reviews */}
              <ReviewsComponent data={reviews} />

              {/* Media */}
              <MediaComponent vedios={vedios} />

              <div className=" mt-10">
                {data?.belongs_to_collection && (
                  <div className="relative max-w-xl">
                    <img
                      className="h-64 w-full object-cover rounded-md"
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                          data?.belongs_to_collection?.backdrop_path ||
                        data?.belongs_to_collection?.poster_path
                      }
                      alt="Random image"
                    />
                    <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <h2 className="text-white text-3xl font-bold">
                        {data?.belongs_to_collection?.name}
                      </h2>
                      <Button
                        onClick={() =>
                          navigateHandler(data?.belongs_to_collection?.id)
                        }
                        className=" bg-primary mt-3"
                      >
                        View The Collection
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className=" mt-10">
                <h1 className=" text-slate-50 text-2xl mb-4">Recommendation</h1>
                {recommendataionData?.results.length === 0 ? (
                  <p className=" text-secondary-50">
                    We don't have enough data to suggest any movies based on
                    Godzilla x Kong: The New Empire. You can help by rating
                    movies you've seen.
                  </p>
                ) : (
                  <TopBilledCastComponent data={recommendataionData} />
                )}
              </div>
            </div>

            {/* social media */}
            <div className=" h-screen">
              {/* icons */}
              <div className=" space-x-3">
                <Button>
                  <Facebook />
                </Button>
                <Button>
                  <Twitter />
                </Button>
                <Button>
                  <Instagram />
                </Button>
              </div>
              <div className=" space-y-5 mt-5">
                <div>
                  <h1 className=" text-stone-200 text-lg">Status</h1>
                  <span className=" text-secondary-50">{data?.status}</span>
                </div>
                <div>
                  <h1 className=" text-stone-200 text-lg">
                    Original Languages
                  </h1>
                  <span className=" text-secondary-50">
                    {data?.original_language}
                  </span>
                </div>
                <div>
                  <h1 className=" text-stone-200 text-lg">Budget</h1>
                  <span className=" text-secondary-50">$ {data?.budget}</span>
                </div>
                <div>
                  <h1 className=" text-stone-200 text-lg">Revenue</h1>
                  <span className=" text-secondary-50">$ {data?.revenue}</span>
                </div>
              </div>

              <div className=" mt-5">
                <h1 className=" text-xl font-medium text-slate-300 mb-3">
                  Keywords
                </h1>
                <div className=" grid grid-cols-2 gap-2 text-xs">
                  {keywords?.keywords?.map((keyword) => {
                    return (
                      <Badge key={keyword?.id} className={" text-xs"}>
                        <p className=" text-[10px]">{keyword?.name}</p>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
};

export default MovieDetailPage;
