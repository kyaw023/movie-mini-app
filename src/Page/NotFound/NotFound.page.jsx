import React from "react";
import { NavbarComponent } from "../../Components";

const NotFoundPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className=" mt-10">
        <h1 className=" text-xl font-semibold text-slate-300">
          Oops! We can't find the page you're looking for
        </h1>
        <p className=" text-sm text-secondary-50 mt-4">
          You tried to request a page that doesn't exist. If you believe this to
          be in error
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
