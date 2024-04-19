import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const frameworks = [
  {
    value: "pdscn",
    label: "Popularity Descending",
  },
  {
    value: "pascn",
    label: "Popularity Ascending",
  },
  {
    value: "rascn",
    label: "Rating Ascending",
  },
  {
    value: "rdscn",
    label: "Rating Descending",
  },
  {
    value: "rdascn",
    label: "Released Date Ascending",
  },
  {
    value: "rddscn",
    label: "Released Date Descending",
  },
  {
    value: "titleAZ",
    label: "Title (A-Z)",
  },
  {
    value: "titleZA",
    label: "Title (Z-A)",
  },
];

const SelectDropDownComponent = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className=" w-full">
          <SelectValue placeholder="Popularity Descending" />
        </SelectTrigger>
        <SelectContent className=" bg-secondary-100 text-slate-300">
          {frameworks?.map((framework) => {
            return (
              <SelectItem value={framework.value}>{framework.label}</SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropDownComponent;
