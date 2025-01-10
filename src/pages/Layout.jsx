import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Links } from "../components/Links/Links";

function Layout(){
    return(
        <div>
            <NavBar/>
            <Links/>
            <Outlet/>     
            <Footer/>                    
        </div>
    );
};

export default Layout;