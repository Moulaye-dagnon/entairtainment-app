import { useEffect, useState } from "react";
import { useAuthContext } from "../utils/context";
import { useBookmarksContext } from "../utils/bookmarksContext";
import { api } from "../services/api.conf";
export function useBookmarks() {
  const { Authuser } = useAuthContext();
  const { Bookmarks, setBookmarks } = useBookmarksContext();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function GetBookmarks() {
      try {
        const response = await api.post(`/bookmarks/${Authuser.id}`);
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
