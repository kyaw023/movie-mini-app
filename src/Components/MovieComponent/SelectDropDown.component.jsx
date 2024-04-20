import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { setFilterName } from "../../store/slice/Filter/FilterSlice";

const frameworks = [
  {
    value: "popularity.desc",
    label: "Popularity descending",
  },
  {
    value: "popularity.asc",
    label: "Popularity Ascending",
  },
  {
    value: "vote_average.asc",
    label: "Rating Ascending",
  },
  {
    value: "vote_average.desc",
    label: "Rating Descending",
  },
  {
    value: "release_date.asc",
    label: "Released Date Ascending",
  },
  {
    value: "release_date.desc",
    label: "Released Date Descending",
  },
  {
    value: "title.asc",
    label: "Title(A-Z)",
  },
  {
    value: "title.desc",
    label: "Title (Z-A)",
  },
];

const SelectDropDownComponent = () => {
  const filterName = useSelector((state) => state.filter.filterName);
  const dispatch = useDispatch();

  const selectHandler = (value) => {
    dispatch(setFilterName(value));
  };

  return (
    <div>
      <Select value={filterName} onValueChange={selectHandler}>
        <SelectTrigger className=" w-full">
          <SelectValue placeholder="Popularity Descending" />
        </SelectTrigger>
        <SelectContent className=" bg-secondary-100 text-slate-300">
          {frameworks?.map((framework, index) => {
            return (
              <SelectItem key={index} value={framework.value}>
                {framework.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropDownComponent;
