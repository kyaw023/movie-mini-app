import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

const HoverCardComponent = ({ description, icon }) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <Button>{icon}</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[200px] h-[4px] flex items-center justify-center">
          {description}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardComponent;
