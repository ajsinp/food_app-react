import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantsMenu";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Ajay Singh"
    }
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default AppLayout;
