import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin/Admin";
import UpdateServer from "./Admin/UpdateServer";
import Home from "./Home/Home";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/updateServer",
    element:<UpdateServer/>
  }
])

function App() {
  
const [appData, setAppData] = useState("");

useEffect(()=>{
  fetch("http://localhost:5000/data")
  .then(res => res.json())
  .then(data => setAppData(data[0]))
})

const { HomeBanner, HomeFocus, HomeAboutUs, HomeContent } = appData;

const data = {HomeBanner, HomeFocus, HomeAboutUs, HomeContent}
  return (
    <AppContext.Provider value={data}>
      <RouterProvider router={router}/>
    </AppContext.Provider>
  );
}

export default App;
