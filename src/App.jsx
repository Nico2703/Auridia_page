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
                    <Route index element={<Home/>}/>  
                    <Route path="panaderia" element={<Panaderia/>}/>  
                    <Route path="pasteleriaconfiteria" element={<PasteleriaConfiteria/>}/>                
                    <Route path="nosotros" element={<Nosotros/>}/>
                    <Route path="contacto" element={<Contacto/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );                  
};

export default App;  