import { SearchComponent } from "../../Components/SearchComponent/SearchComponent";
import { TrendingOverviewComponent } from "../../Components/Trending-overview/TrendingOverview";
import { HeaderComponent } from "../../Components/headerComponent/headerComponent";

export function HomeComponent() {
  return (
    <div className="lg:flex lg:justify-between   lg:p-8  ">
      <HeaderComponent />

      <div className=" flex-auto mx-9">
        <SearchComponent />
		<TrendingOverviewComponent/>
      </div>
    </div>
  );
}
