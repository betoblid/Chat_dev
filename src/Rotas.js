import React from "react"

import { BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./Pages/Home"
import Erro404 from "./Pages/404"
import Users from "./Pages/Users"
import Cadastro from "./Pages/Cadastro"

const Rotas = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;