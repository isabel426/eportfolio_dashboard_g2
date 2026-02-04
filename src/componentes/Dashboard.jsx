import { useContext } from "react";
import UserContext from "../contextos/UserContext";
import NuevaEvidencia from "./NuevaEvidencia.jsx";
import { Route, Routes } from "react-router-dom";

import FuncionalidadDocente from "../paginas/FuncionalidadDocente.jsx";
import FuncionalidadEstudiante from "../paginas/FuncionalidadEstudiante.jsx";
import Home from "../paginas/Home.jsx";
import PaginaFamiliasProfesionales from "../paginas/PaginaFamiliasProfesionales.jsx"
const Dashboard = (props) => {

    const user = useContext(UserContext);

    return(
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
                <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
                <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales></PaginaFamiliasProfesionales>} />
            </Routes>

        </main>
    )
}

export default Dashboard;