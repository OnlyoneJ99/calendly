import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Individuals from "./Pages/Individuals";
import Enterprise from "./Pages/Enterprise";
import Teams from "./Pages/Teams";
import Home from "./Pages/Home";

export const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="individuals" element={<Individuals />} />
      <Route path="teams" element={<Teams />} />
      <Route path="enterprice" element={<Enterprise />} />
    </Route>
  )
);
