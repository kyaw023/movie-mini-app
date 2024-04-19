import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const CheckBoxComponent = ({ id, labelName }) => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <Checkbox id={id} />
        <Label htmlFor="everything" className=" text-slate-300">
          {labelName}
        </Label>
      </div>
    </div>
  );
};

export default CheckBoxComponent;
