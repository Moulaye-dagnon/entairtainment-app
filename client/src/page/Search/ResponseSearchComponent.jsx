import { useSearchParams } from "react-router-dom";
import { api } from "../../services/api.conf";
import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";

export function ResponseSearchComponent() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const search = searchParams.get("q");

  useEffect(() => {
    async function FetchSearch() {
      try {
        const response = await api.post(`/search/${search}`);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("Erreur", error);
      }
    }
    FetchSearch();
  }, [search]);

  return (
    <>
      <CardOverviewComponent
        Data={data}
        title={`Found ${data.length} results for ‘${search}’`}
      />
    </>
  );
}
