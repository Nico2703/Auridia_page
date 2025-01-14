import { Link } from "react-router-dom";
import { HomeWidget } from "./components/HomeWidget";

export const NavBar = () =>{
    return <>
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <div className="logo">
                <Link to="Auridia_page" className="navbar-brand mb-0 h1">
                    <HomeWidget/>   
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            
            <div className="collapse navbar-collapse" id="navbarText">
                <img className="imgNav1" src={`${process.env.PUBLIC_URL}/assets/img/Lugar (1).jpeg`} width="160" height="140" alt=""></img>
                <img className="imgNav2" src={`${process.env.PUBLIC_URL}/assets/img/Producto (4).jpeg`} width="160" height="140" alt=""></img>
                <img className="imgNav3" src={`${process.env.PUBLIC_URL}/assets/img/Lugar (2).jpeg`} width="160" height="140" alt=""></img>
                <img className="imgNav4" src={`${process.env.PUBLIC_URL}/assets/img/Producto (13).jpeg`}  width="160" height="140" alt=""></img>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li id="primerItem" className="nav-item">
                        <Link to="/Auridia_page/panaderia" className="nav-link">
                            Panadería
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Auridia_page/pasteleriaconfiteria" className="nav-link">
                            Pastelería/Confitería
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Auridia_page/nosotros" className="nav-link">
                            Nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Auridia_page/contacto" className="nav-link">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}