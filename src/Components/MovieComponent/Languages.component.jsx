import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetLanguagesQuery } from "../../store/endpoints/Movie.endpoint";
import { useDispatch, useSelector } from "react-redux";
import { setFilterLanguage } from "../../store/slice/Filter/FilterSlice";

const LanguagesComponent = () => {
  const { data } = useGetLanguagesQuery();
  const dispatch = useDispatch();
  const languageName = useSelector((state) => state.filter.filterLanguage);
  const selectHandler = (value) => {
    dispatch(setFilterLanguage(value));
  };
  return (
    <Select value={languageName} onValueChange={selectHandler}>
      <SelectTrigger className="">
        <SelectValue className=" text-white" placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((language, index) => {
          return (
            <div key={index}>
              {language?.name && (
                <SelectItem value={language?.english_name}>
                  {language?.name}
                </SelectItem>
              )}
            </div>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default LanguagesComponent;
