import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Pasteleria from "./pages/Pasteleria";
import Confiteria from "./pages/Confiteria";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="home" index element={<Home/>}/>  
                    <Route path="pasteleria" element={<Pasteleria/>}/>  
                    <Route path="confiteria" element={<Confiteria/>}/>                
                    <Route path="nosotros" element={<Nosotros/>}/>
                    <Route path="contacto" element={<Contacto/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );                  
};

export default App;  