import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../utils/context";
import { useBookmarksContext } from "../utils/bookmarksContext";

export function useBookmarks() {
  const { Authuser } = useAuthContext();
  const { Bookmarks, setBookmarks } = useBookmarksContext();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function GetBookmarks() {
      try {
        const response = await axios.post(
          `http://localhost:3000/bookmarks/${Authuser.id}`
        );
        if (response.status == 200) {
          setData(response.data.data);
          setBookmarks(response.data.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    GetBookmarks();
  }, [Authuser.id, Bookmarks]);

  return { data };
}
