import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";
import { TrendingOverviewComponent } from "../../Components/Trending-overview/TrendingOverview";
import axios from "axios";
import { useAuthContext } from "../../utils/context";

export function HomeComponent() {
  const [Data, setData] = useState(null);
  const { Authuser } = useAuthContext();
  useEffect(() => {
    async function NoTrendingFech() {
      try {
        const response = await axios.get("http://localhost:3000/nottrending");
        if (response.status == 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    NoTrendingFech();
  }, []);
  return (
    <div className="w-full">
      <TrendingOverviewComponent />
      {Data && (
        <CardOverviewComponent title={"Recommended for you"} Data={Data} />
      )}
    </div>
  );
}
