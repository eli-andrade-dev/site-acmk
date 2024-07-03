import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./page";
import Sobre from "./Components/Sobre/Sobre";
import Inicio from "./Components/Inicio/Inicio";
import Galeria from "./Components/Galeria/Galeria";
import Atletas from "./Components/Atletas/Atletas";
import Contato from "./Components/Contato/Contato";
import Apoiadores from "./Components/Apoiadores/Apoiadores";


function App() {
    return (
      
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />}>
                    <Route index element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Galeria" element={<Galeria />} />
                    <Route path="Atletas" element={<Atletas />} />
                    <Route path="Contato" element={<Contato />} />
                    <Route path="Apoiadores" element={<Apoiadores />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
