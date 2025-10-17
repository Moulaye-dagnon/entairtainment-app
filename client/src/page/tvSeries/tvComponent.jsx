import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";
import axios from "axios";
export function TvComponent() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    async function MoviesFech() {
      try {
        const response = await axios.get("http://localhost:3000/tv");
        if (response.status == 200) {
          setData(response.data.data);
        }
      } catch (error) {}
    }
    MoviesFech();
  }, []);
  return (
    <div>
      {Data ? <CardOverviewComponent title={"TV Series"} Data={Data} /> : ""}
    </div>
  );
}
