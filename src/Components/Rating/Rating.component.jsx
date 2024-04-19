import { Heart, Star } from "lucide-react";
import React from "react";

const RatingComponent = ({ watchlistProps, ratingListPros, idProps }) => {
    
  

//   console.log(
//     getCommonMovies(watchlistProps?.results, ratingListPros?.results, idProps)
//   );
  return (
    <div className="flex items-center gap-2">
      <Star className="w-10 h-10 text-white border  border-secondary-50 p-3 rounded-full" />
      <span className="text-secondary-50">Favourite</span>
    </div>
  );
};

export default RatingComponent;
