import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import { RootComponent } from "./page/root/RootComponent";
import { LoginComponent } from "./page/login/loginComponent";
import { RegisterComponent } from "./page/register/registerComponent";
import { HomeComponent } from "./page/Home/HomeComponent";

function App() {
  const root = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        { index: true, element: <HomeComponent /> },
        {
          path: "/login",
          element: <LoginComponent />,
        },
        { path: "/register", element: <RegisterComponent /> },
      ],
    },
  ]);
  return <RouterProvider router={root} />;
}
export default App;
