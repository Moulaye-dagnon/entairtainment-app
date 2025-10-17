import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";
import { api } from "../../services/api.conf";
export function MovieComponent() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    async function MoviesFech() {
      try {
        const response = await api.get("/movies");
        if (response.status == 200) {
          setData(response.data.data);
          console.log(Data);
        }
      } catch (error) {
        console.log("Erreur", error);
      }
    }
    MoviesFech();
  }, []);
  return (
    <div>
      {Data ? <CardOverviewComponent title={"Movies"} Data={Data} /> : ""}
    </div>
  );
}
