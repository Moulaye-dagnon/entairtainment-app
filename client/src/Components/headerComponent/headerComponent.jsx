import { Logo } from "../logoComponent/Logo";
import icon_home from "../../assets/icon-nav-home.svg";
import icon_movies from "../../assets/icon-nav-movies.svg";
import icon_tv_series from "../../assets/icon-nav-tv-series.svg";
import icon_bookmarks from "../../assets/icon-nav-bookmark.svg";
import icon_avatar from "../../assets/image-avatar.png";
import icon_logo from "../../assets/logo.svg";
export function HeaderComponent() {
  return (
    <div className="w-full lg:flex-col lg:w-23  lg:flex-none lg:h-11/12     mx-auto bg-semi-dark-blue md:rounded-xl p-4 flex justify-between  items-center ">
      <div className="w-6 md:w-8">
        <img src={icon_logo} alt="" />
      </div>
      <div className=" flex justify-between items-center flex-none w-[63%] lg:flex-col lg:w-auto lg:h-[85%]">
        <ul className=" list-none lg:flex-col flex flex-none lg:w-auto lg:h-33  w-33 md:w-43 justify-between items-center">
          <li>
            <a href="/">
              <img src={icon_home} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={icon_movies} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={icon_tv_series} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={icon_bookmarks} alt="" />
            </a>
          </li>
        </ul>
        <div className="w-6 md:w-8 flex-none mb-0  ">
          <img src={icon_avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
