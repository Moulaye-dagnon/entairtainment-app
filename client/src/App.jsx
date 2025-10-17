import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { RootComponent } from "./page/root/RootComponent";
import { LoginComponent } from "./page/login/loginComponent";
import { RegisterComponent } from "./page/register/registerComponent";
import { HomeComponent } from "./page/Home/HomeComponent";
import { MovieComponent } from "./page/movie/MovieComponent";
import { TvComponent } from "./page/tvSeries/tvComponent";
import { ResponseSearchComponent } from "./page/Search/ResponseSearchComponent";
import { use, useEffect } from "react";
import axios from "axios";
import { FavoriteComponent } from "./page/favorite/favorite";
import { useAuthContext } from "./utils/context";

function App() {
  const { Authuser } = useAuthContext();

  const root = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        { index: true, element: <HomeComponent /> },
        {
          path: "/movies",
          element: <MovieComponent />,
        },
        { path: "/tv", element: <TvComponent /> },
        { path: "/search/", element: <ResponseSearchComponent /> },
        {
          path: "/bookmarks",
          element: Authuser ? (
            <FavoriteComponent />
          ) : (
            <Navigate to={"/login"} />
          ),
        },
      ],
    },
    {
      path: "/register",
      element: Authuser ? <Navigate to={"/"} /> : <RegisterComponent />,
    },
    {
      path: "/login",
      element: Authuser ? <Navigate to={"/"} /> : <LoginComponent />,
    },
  ]);
  return <RouterProvider router={root} />;
}
export default App;
