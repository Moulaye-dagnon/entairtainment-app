import icon_search from "../../assets/icon-search.svg";
export function SearchComponent() {
  return (
    <div className=" w-63.5 my-6.5 md:my-8.5 h-6 md:w-95 md:h-8   pl-10 md:pl-14 relative">
      <div className=" absolute left-0 size-6 top-0 md:size-8">
        <img src={icon_search} alt="" />
      </div>

      <input
        className="w-full border-none outline-0 caret-red text-lg caret "
        placeholder="Search for movies or TV series"
        type="text"
      />
    </div>
  );
}
