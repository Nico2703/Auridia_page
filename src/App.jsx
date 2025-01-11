import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Panaderia from "./pages/Panaderia";
import PasteleriaConfiteria from "./pages/PasteleriaConfiteria";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="Auridia_page" index element={<Home/>}/>  
                    <Route path="Auridia_page/panaderia" element={<Panaderia/>}/>  
                    <Route path="Auridia_page/pasteleriaconfiteria" element={<PasteleriaConfiteria/>}/>                
                    <Route path="Auridia_page/nosotros" element={<Nosotros/>}/>
                    <Route path="Auridia_page/contacto" element={<Contacto/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );                  
};

export default App;  