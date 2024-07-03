import React from "react";

import { Outlet, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./Components/Navegacao/StyleNavegacao.css";
import Footer from "./Components/Footer/Footer";

const Page = () => {
    return (
        <div>
            <section className="navegacao">
                <Header />
                    <nav className="lista">
                        <ul>
                            <li> <Link to="/">Inicio</Link> </li>
                            <li> <Link to="/Sobre">Sobre nós</Link> </li>
                            <li> <Link to="/Galeria">Galeria</Link> </li>
                            <li> <Link to="/Atletas">Nossos Atletas</Link> </li>
                            <li> <Link to="/Contato">Contato</Link> </li>
                            <li> <Link to="/Apoiadores">Apoiadores</Link> </li>
                           </ul>
                    </nav>
            </section>
            
            <main className="conteudo-principal">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Page;