import { Loader2 } from "lucide-react";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const FetchingComponent = ({ children, isFetching, type }) => {
  return (
    <div>
      {isFetching ? (
        // <div className=" flex items-center h-screen justify-center">
        //   <Loader2 className="mr-2 h-6 w-6 animate-spin text-white" />
        //   <p className=" text-white">Data is Fetching Please wait...</p>
        // </div>

        <div>
          {type === "moviecard" ? (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] md:w-[200px] w-[180px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[140px]" />
                <Skeleton className="h-1 w-[100px]" />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] md:w-[150px] w-[180px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-[140px]" />
                  <Skeleton className="h-1 w-[100px]" />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default FetchingComponent;
