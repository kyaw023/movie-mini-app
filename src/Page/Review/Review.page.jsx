import { Badge, Pencil } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../Components/ui/avatar";
import { Button } from "../../Components/ui/button";
import { NavbarComponent } from "../../Components";

const ReviewPage = () => {
  const { state } = useLocation();

  return (
    <div>
      <div className=" grid md:grid-cols-3 grid-cols-1 mt-14 px-2 md:px-0 space-y-3 md:space-y-0">
        <div>
          <Button className=" uppercase">
            <Pencil size={"14px"} className=" mr-3" />
            write review
          </Button>
        </div>
        <div className=" col-span-2 space-y-5">
          {state?.results?.map((result) => {
            return (
              <div
                className=" shadow-xl border border-secondary-100 p-4 rounded-xl"
                key={result?.id}
              >
                <div>
                  <div className=" flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          result?.author_details?.avatar_path
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className=" text-white">
                        A Review by {result?.author_details?.name}
                      </h1>
                      <div>
                        <Badge className={" bg-black text-primary"}>
                          {result?.author_details?.rating}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className=" text-secondary-50 mt-4 text-xs md:text-sm">
                    {result?.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
