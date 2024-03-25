import React, { lazy,Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";  
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";  
import RestaurantMenu from "./components/RestaurantsMenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name:"Ajay Singh" 
    }
    setUserName (data.name); 
  });


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
        <div className="App">
          <Header/>  
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
    
  ); 
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/grocery",
        element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/cart",
        element: <Cart/>
      }   
    ],
    errorElement:<Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
