import { Link } from "react-router-dom";
import { HomeWidget } from "./components/HomeWidget";

export const NavBar = () =>{
    return <>
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <div className="logo">
                <Link to="/home" className="navbar-brand mb-0 h1">
                    <HomeWidget/>   
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
                <img src="/assets/img/Lugar (1).jpeg" width="160" height="140" alt=""></img>
                <img src="/assets/img/Producto (3).jpeg" width="160" height="140" alt=""></img>
                <img src="/assets/img/Producto (4).jpeg" width="160" height="140" alt=""></img>
                <img className="imgNav" src="/assets/img/Producto (11).jpeg"  width="160" height="140" alt=""></img>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li id="primerItem" className="nav-item">
                        <Link to="/pasteleria" className="nav-link">
                            Pasteleria
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/confiteria" className="nav-link">
                            Confitería
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nosotros" className="nav-link">
                            Nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-link">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}