import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header";
import Footer from "./../pages/footer/Footer";

const Roots = () => {
  return (
    <div className="bg-[#EFEFEF]">
      <div className="flex flex-col container mx-auto sm:space-y-10 md:space-y-14 lg:space-y-24 px-1 mb-28">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
