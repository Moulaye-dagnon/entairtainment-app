import { createContext, useContext, useState } from "react";

const BookmarksContext = createContext(null);

export const useBookmarksContext = () => {
  return useContext(BookmarksContext);
};

export const BookmarksContextProvider = ({ children }) => {
  const [Bookmarks, setBookmarks] = useState(null);
  return (
    <BookmarksContext.Provider value={{ Bookmarks, setBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
};
