import React from "react";
import { useGetMovieReviewsQuery } from "../../store/endpoints/Movie.endpoint";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge } from "../ui/badge";

const ReviewsComponent = ({ data }) => {
  const navigator = useNavigate();
  const { id } = useParams();

  const navReviewHandler = () => {
    navigator(`/movie_detail/${id}/reviews`, { state: data });
  };
  return (
    <div>
      {data?.results?.length === 0 ? (
        <p className=" text-secondary-50 mt-10 text-xl">There is no reviews </p>
      ) : (
        <div className=" ">
          <h1 className=" text-2xl text-slate-50 mt-10 mb-4">Reviews</h1>
          <div className="bg-secondary-100 px-3 py-4 rounded-lg shadow-xl">
            {data?.results?.slice(0, 1)?.map((review) => {
              return (
                <div key={review?.id}>
                  <div>
                    <div className=" flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            review?.author_details?.avatar_path
                          }
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className=" text-white">
                          A review by {review?.author_details?.name}
                        </h1>
                        <div>
                          <Badge className={" bg-black text-primary"}>
                            {review?.author_details?.rating}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className=" text-secondary-50 mt-4">{review?.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" mt-4">
            {data?.results?.length > 2 && (
              // <Link to={``}>
              // </Link>
              <button
                onClick={navReviewHandler}
                className=" text-lg font-semibold text-primary"
              >
                Read All Review
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsComponent;
