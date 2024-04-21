import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetMultiSearchQuery } from "../../store/endpoints/Search.endpoint";
import {
  Asterisk,
  Crown,
  GanttChart,
  List,
  LogOut,
  PictureInPicture2,
  Speech,
  X,
} from "lucide-react";

import { Skeleton } from "../ui/skeleton";

import { useGetAccountDetailQuery } from "../../store/endpoints/General.endpoint";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../Components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "../../Components/ui/dropdown-menu";
import { useLogoutMutation } from "../../store/endpoints/Auth.endpoint";
import { toast } from "sonner";

const NavbarComponent = ({ isLoading }) => {
  const [drawer, setDrawer] = useState(false);
  const navigator = useNavigate();
  const [searchValues, setSearchValues] = useState("");
  const [searchData, setSearchData] = useState([]);
  //const [queryName, setQueryName] = useState(null);
  const onChangeHandler = (e) => {
    setSearchValues(e.target.value);
  };

  const { data, isLoading: searchLoading } =
    useGetMultiSearchQuery(searchValues);

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const onSubmitHandler = (e) => {
    console.log(searchValues);
    e.preventDefault();
    if (!searchLoading) {
      const queryName = searchData?.results[0]?.media_type;
      console.log(queryName);
      if (searchData && searchData.results.length > 0 && queryName) {
        navigator(`/search/${queryName || "movie"}/${searchValues}`, {
          state: { searchData, searchValues },
        });
      }
      setSearchValues("");
    }
  };

 

  const [logoutFun] = useLogoutMutation();

  const { data: accountDetail } = useGetAccountDetailQuery(
    localStorage.getItem("sessionID")
  );

  if (accountDetail?.id) {
    localStorage.setItem("accountID", accountDetail?.id);
  }

  const logoutHandler = async () => {
    localStorage.removeItem("sessionID");
    await logoutFun(localStorage.getItem("sessionID"));
    navigator("/sign-in");
    toast.success("Logout Successfuly");
  };

  // function to change drawer state
  const drawerHandler = () => {
    setDrawer((prev) => !prev);
  };
  const signInHandler = () => {
    navigator("/sign-In");
  };
  // function if change page  close the drawer

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-between select-none px-2 md:px-0">
          <Skeleton className="md:h-4 md:w-[200px] h-10 w-[70px] rounded" />
          <ul className=" md:flex item-center gap-8  hidden  ">
            <Skeleton className="h-1 w-[40px] bg-secondary-50 rounded-none" />
            <Skeleton className="h-1 w-[40px]" />
            <Skeleton className="h-1 w-[40px]" />
            <Skeleton className="h-1 w-[40px]" />
          </ul>
          <div className="flex items-center space-x-4">
            <div className="">
              <Skeleton className="h-10 w-[200px]" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-between select-none  md:px-0">
          {/* logo */}
          <div className=" px-2">
            <Link to={"/"} className="hidden md:block">
              <h1 className=" text-2xl font-semibold text-slate-50">
                <span className=" text-primary">Prime</span>Flicks
              </h1>
            </Link>
            <div className=" md:hidden">
              <Button onClick={drawerHandler}>
                <GanttChart />
              </Button>
            </div>
          </div>

          {/* navlink */}
          <ul
            className={`flex md:flex-row item-center  flex-col space-y-4 md:space-y-0 gap-8 text-secondary-50 fixed md:static bg-secondary-100 h-screen md:h-auto md:bg-black md:w-auto top-0 z-50 w-[300px] p-4 md:px-0 text-sm  ${
              !drawer
                ? "-left-full transition-all duration-700 md:transition-none md:duration-0"
                : " left-0 transition-all duration-700 md:transition-none md:duration-0"
            }`}
          >
            <div className=" flex items-center justify-between md:hidden">
              <h1
                className=" text-2xl font-semibold text-slate-50"
                onClick={drawerHandler}
              >
                <span className=" text-primary">Prime</span>Flicks
              </h1>
              <div className="" onClick={drawerHandler}>
                <X size={"16px"} className=" text-slate-200" />
              </div>
            </div>
            <NavLink to="/">
              <li>Main</li>
            </NavLink>
            <NavLink to="/movies">
              <li>Movies</li>
            </NavLink>
            <NavLink to="/series">
              <li>Tv Shows</li>
            </NavLink>
            <NavLink to="/people">
              <li>People</li>
            </NavLink>
            <NavLink to="/discover">
              <li>Discoverd</li>
            </NavLink>
          </ul>

          <div className=" flex items-center gap-5 ml-2 md:ml-0">
            <form onSubmit={onSubmitHandler}>
              <Input
                value={searchValues}
                onChange={onChangeHandler}
                placeholder={"search"}
                className=" bg-secondary-100 text-slate-50 border-secondary-50 focus:ring-secondary-50"
              />
            </form>
            <div>
              {!localStorage.getItem("sessionID") ? (
                <Button
                  onClick={signInHandler}
                  className=" bg-primary text-slate-100"
                >
                  Sign In
                </Button>
              ) : (
                <div className="">
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            className=" w-14 h-14 object-cover"
                            src={
                              "https://image.tmdb.org/t/p/w500" +
                              accountDetail?.avatar?.tmdb?.avatar_path
                            }
                          />
                          <AvatarFallback>
                            {accountDetail?.username}
                          </AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <div className=" flex flex-col space-y-1">
                              <h1 className=" text-lg text-slate-900 font-semibold">
                                {accountDetail?.username}
                              </h1>
                              <span className=" text-slate-500 text-xs">
                                View Profile
                              </span>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Speech className="mr-2 h-4 w-4" />
                          <span>Discussions</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={`/lists`}
                            className=" flex items-center justify-center"
                          >
                            <List className="mr-2 h-4 w-4" />
                            <span>Lists</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={`/rating`}
                            className=" flex items-center justify-center"
                          >
                            <Asterisk className="mr-2 h-4 w-4" />
                            <span>Rating</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={`/watchlist`}
                            className=" flex items-center justify-center"
                          >
                            <PictureInPicture2 className="mr-2 h-4 w-4" />
                            <span>WatchList</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={`/favorite`}
                            className=" flex items-center justify-center"
                          >
                            <Crown className="mr-2 h-4 w-4" />
                            <span>Favourite</span>
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <span>Edit Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Setting</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logoutHandler}>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
