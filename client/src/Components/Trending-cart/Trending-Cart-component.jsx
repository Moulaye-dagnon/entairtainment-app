import icon_movie from "../../assets/icon-category-movie.svg";
import icon_bookmark_empty from "../../assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../../assets/icon-bookmark-full.svg";
import icon_play from "../../assets/icon-play.svg";
export function TrendingCartComponent({ item }) {
  return (
    <div
      style={{
        backgroundImage: `url(${item.thumbnail.trending.small})`,
      }}
      className={`  w-60 md:w-117.5 relative flex-none pt-17.5 pb-4 px-4 rounded-xl  bg-no-repeat bg-cover bg-center `}
    >
      <div className="thumbnailHover"></div>
      <button className=" size-8 p-2 opacity-50 flex items-center justify-center bg-dark-blue rounded-full absolute right-2 top-2 ">
        <img src={icon_bookmark_empty} alt="" />
      </button>
      <div className=" text-xs rounded-b-xl">
        <div className="flex items-center h-4 ">
          <span>{item.year}</span>
          <span className=" mx-2 before-circle  flex items-center">
            <img
              className=" inline-block mx-2  text-white "
              src={icon_movie}
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
