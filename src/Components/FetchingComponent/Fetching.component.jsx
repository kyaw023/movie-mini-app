import { Loader2 } from "lucide-react";
import React from "react";

const FetchingComponent = ({ children, isFetching }) => {
  return (
    <div>
      {isFetching ? (
        <div className=" flex items-center h-screen justify-center">
          <Loader2 className="mr-2 h-6 w-6 animate-spin text-white" />
          <p className=" text-white">Data is Fetching Please wait...</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default FetchingComponent;
