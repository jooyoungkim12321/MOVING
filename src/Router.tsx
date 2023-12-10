import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import HomeB from "./HomeB";
import HomeA from "./HomeA";
import Login from "./Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeB />,
      },
      { path: "login", element: <Login /> },
      { path: "home", element: <HomeA /> },
    ],
  },
]);

export default Router;
