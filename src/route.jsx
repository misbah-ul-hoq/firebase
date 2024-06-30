import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Services from "./pages/Services";
import LoginForm from "./components/LoginForm";
import SingleService from "./components/SingleService";
import SignUpform from "./components/SignUpform";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        // loader: () => fetch("http://localhost:3000/services"),
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <SingleService />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignUpform />,
      },
    ],
  },
]);

export default routes;
