import icon_movie from "../../assets/icon-category-movie.svg";
import icon_tv from "../../assets/icon-category-tv.svg";
import icon_bookmark_empty from "../../assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../../assets/icon-bookmark-full.svg";
import icon_play from "../../assets/icon-play.svg";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../utils/context";
import axios from "axios";
export function CardNormalComponent({ item }) {
  const [backgroundImage, setBackgroundImage] = useState(
    item.thumbnail.regular.small
  );
  const [icon_bookmark, setIcon_bookmark] = useState(icon_bookmark_empty);
  const [b, setb] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBackgroundImage(item.thumbnail.regular.medium);
      } else if (window.innerWidth >= 1020) {
        setBackgroundImage(item.thumbnail.regular.large);
      } else {
        setBackgroundImage(item.thumbnail.regular.small);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [
    item.thumbnail.regular.large,
    item.thumbnail.regular.medium,
    item.thumbnail.regular.small,
  ]);

  const { Authuser } = useAuthContext();

  const handleBookmarksAdd = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post("http://localhost:3000/bookmarks", {
        userID: Authuser.id,
        movieID: item._id,
        type: item.category,
      });
      if (response.status == 201) {
        setIcon_bookmark(icon_bookmark_full);
      }
      if (response.status == 204) {
        setIcon_bookmark(icon_bookmark_empty);
      }
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
    <div className="flex-none w-full  xs:w-[48%] cursor-pointer relative group    md:w-[30.5%] lg:w-[20%]  ">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className={`w-full h-28 md:h-34.5 relative  flex-none  rounded-xl  bg-no-repeat bg-cover bg-center `}
      >
        <div className=" hidden group-hover:flex group-hover:absolute top-0 left-0 right-0 bottom-0 group-hover:bg-black/50  justify-center items-center z-10">
          <div className=" lg:text-lg p-2 bg-white/25 rounded-4xl flex justify-between items-center ">
            <img src={icon_play} alt="" />
            <span className=" inline ml-4.5">Play</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleBookmarksAdd()}
        className=" transition delay-75 duration-300 ease-in-out hover:scale-125  cursor-pointer size-8 p-2 opacity-50 flex items-center justify-center bg-dark-blue rounded-full absolute right-2 top-2 z-20 "
      >
        <img className="" src={icon_bookmark} alt="" />
      </button>
      <div className=" text-[11px] md:text-[13px] rounded-b-xl pt-2 ">
        <div className="flex items-center h-4 ">
          <span>{item.year}</span>
          <span className=" mx-2 before-circle  flex items-center">
            <img
              className=" inline-block mx-1  text-white "
              src={item.category == "Movie" ? icon_movie : icon_tv}
              alt=""
            />
            {item.category}
          </span>
          <span className=" flex items-center before-circle">
            {item.rating}
          </span>
        </div>
        <div className=" mt-1 text-[18px]">{item.title}</div>
      </div>
    </div>
  );
}
