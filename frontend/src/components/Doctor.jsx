import { Outlet } from "react-router-dom";
import NavbarDoctor from './NavbarDoctor'; 
import Hero from "./Hero";

import Footer from "./Footer";


const Doctor = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavbarDoctor/>

        <Hero />        

        <Outlet />
        
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Doctor;
