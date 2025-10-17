import icon_movie from "../../assets/icon-category-movie.svg";
import icon_tv from "../../assets/icon-category-tv.svg";
import icon_bookmark_empty from "../../assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../../assets/icon-bookmark-full.svg";
import icon_play from "../../assets/icon-play.svg";
import { useEffect, useState } from "react";
export function TrendingCartComponent({ item }) {
  const [backgroundImage, setBackgroundImage] = useState(
    item.thumbnail.trending.small
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBackgroundImage(item.thumbnail.trending.large);
      } else {
        setBackgroundImage(item.thumbnail.trending.small);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [item.thumbnail.trending.large, item.thumbnail.trending.small]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={`  cursor-pointer w-60 md:w-117.5 relative flex-none pt-17.5 pb-4 px-4 rounded-xl  bg-no-repeat bg-cover bg-center `}
    >
      <div className="thumbnailHover"></div>
      <button className=" size-8 p-2 opacity-50 flex items-center justify-center bg-dark-blue rounded-full absolute right-2 top-2 ">
        <img src={icon_bookmark_empty} alt="" />
      </button>
      <div className=" text-[11px] rounded-b-xl">
        <div className="flex items-center h-4 ">
          <span>{item.year}</span>
          <span className=" mx-2 before-circle  flex items-center">
            <img
              className=" inline-block mx-2  text-white "
              src={item.category == "Movie" ? icon_movie : icon_tv}
              alt=""
            />
            {item.category}
          </span>
          <span className=" flex items-center before-circle">
            {item.rating}
          </span>
        </div>
        <div className=" mt-1 text-xl">{item.title}</div>
      </div>
    </div>
  );
}
