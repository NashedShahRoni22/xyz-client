import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin/Admin";
import Home from "./Home/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/admin",
    element:<Admin/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
