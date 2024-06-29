import { Outlet } from "react-router-dom";
import NavbarPatient from './NavbarPatient'; 
import Hero from "./Hero";

import Footer from "./Footer";


const Patient = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavbarPatient />

        <Hero />        

        <Outlet />
        
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Patient;
