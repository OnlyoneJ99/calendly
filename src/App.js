import "./css/bootstrap.min.css";
import "./css/style.css";
import {  RouterProvider } from "react-router-dom"
import { router } from "./router_"


function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
