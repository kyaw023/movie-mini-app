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

const LanguagesComponent = () => {
  const { data } = useGetLanguagesQuery();
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="None selected" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((language) => {
          return (
            <div>
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
