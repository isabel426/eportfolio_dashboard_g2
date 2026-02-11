import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import useRoles from "../hooks/useRoles.jsx";
import useMisModulosImpartidos from "../hooks/useMisModulosImpartidos.jsx";
import useMisModulosMatriculados from "../hooks/useMisModulosMatriculados.jsx";

import mockAdministrador from "../mocks/mock-administrador.js"
import RutasAcordeon from "./RutasAcordeon.jsx";

const Menu = () => {
    const roles = useRoles();
    const modulosImpartidos = useMisModulosImpartidos();
    const modulosMatriculados = useMisModulosMatriculados();

    function manejarRol(rol) {
        switch (rol) {

            case 'administrador':
                return mockAdministrador.administrador.map((value, index) => (
                    <RutasAcordeon key={index} nombre={value.nombre} ruta={value.ruta} />
                ));

            case 'docente':
                return modulosImpartidos.lista.map((value, index) => (
                    <RutasAcordeon key={index} nombre={value.nombre} ruta={`/funcionalidaddocente/${value.id}`} />
                ));

            case 'estudiante':
                return modulosMatriculados.lista.map((value, index) => (
                    <RutasAcordeon key={index} nombre={value.nombre} ruta={`/funcionalidadestudiante/${value.id}`} />
                ));
            
            default:
                return null;
        }

    }


    function generaAcordeon(rol, index) {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{rol}</Typography>
                </AccordionSummary>
                {
                    manejarRol(rol)
                }
            </Accordion>
        )
    }


    return (
        <>
            {roles.lista.map(generaAcordeon)}
        </>
    )

};

export default Menu;
