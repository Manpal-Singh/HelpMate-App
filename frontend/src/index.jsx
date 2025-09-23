import "typeface-roboto";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./Components/Body/Body.jsx";
import App from "./App.jsx";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import "./index.css";
import Signup from "./Components/Auth/Signup.jsx";
import Login from "./Components/Auth/Login.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import Services from "./Pages/services.jsx";
import ServiceMateList from "./Components/Services/ServiceMateList.jsx";
import ServiceMateDetail from "./Components/Services/ServiceMateDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/service/:serviceName",
        element: <ServiceMateList />,
      },
      {
        path: "services/service/:serviceName/:serviceMateDetail",
        element: <ServiceMateDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
