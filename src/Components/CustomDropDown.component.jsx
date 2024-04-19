import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const CustomDropDownComponet = ({ title, items }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" text-slate-50">{title}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className=" text-slate-300">{title}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.map((item) => {
            return (
              <div className=" text-slate-50">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </div>
            );
          })}

          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CustomDropDownComponet;
