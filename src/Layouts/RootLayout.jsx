import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
