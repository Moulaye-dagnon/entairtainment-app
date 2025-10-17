import { Outlet } from "react-router";
import { HeaderComponent } from "../../Components/headerComponent/headerComponent";
import { SearchComponent } from "../../Components/SearchComponent/SearchComponent";
import { useState } from "react";

export function RootComponent() {
  //   const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="lg:flex lg:justify-between md:p-6 w-full max-w-full  ">
      <HeaderComponent />
      <div className=" flex-1 px-4 w-full">
        <SearchComponent setSearch={setSearch} search={search} />

        <Outlet />
      </div>
    </div>
  );
}
