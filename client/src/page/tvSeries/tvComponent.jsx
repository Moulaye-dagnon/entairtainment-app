import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";
import { api } from "../../services/api.conf";
export function TvComponent() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    async function MoviesFech() {
      try {
        const response = await api.get("/tv");
        if (response.status == 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("Erreur", error);
      }
    }
    MoviesFech();
  }, []);
  return (
    <div>
      {Data ? <CardOverviewComponent title={"TV Series"} Data={Data} /> : ""}
    </div>
  );
}
