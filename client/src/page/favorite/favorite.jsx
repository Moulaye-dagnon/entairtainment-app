import { useEffect, useState } from "react";
import { CardOverviewComponent } from "../../Components/Card-overview/CardOverviewComponent";
import { useBookmarks } from "../../Hook/useBookmarks";

export function FavoriteComponent() {
  const [datMovies, setDataMovies] = useState(null);
  const [dataTv, setDataTv] = useState(null);
  const { data } = useBookmarks();

  useEffect(() => {
    if (data) {
      const data_movie = data
        ?.filter((bookmark) => bookmark.type == "Movie")
        .map((movies) => {
          return movies.movies;
        });
      const data_tv = data
        ?.filter((bookmark) => bookmark.type == "TV Series")
        .map((movies) => {
          return movies.movies;
        });
      setDataMovies(data_movie);
      setDataTv(data_tv);
    }
  }, [data]);
  return (
    <div>
      {datMovies && (
        <CardOverviewComponent title={"Bookmarked Movies"} Data={datMovies} />
      )}
      {dataTv && (
        <CardOverviewComponent title={"Bookmarked TV Series"} Data={dataTv} />
      )}
    </div>
  );
}
