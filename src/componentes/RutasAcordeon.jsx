import { AccordionDetails } from "@mui/material";
import { Link } from "react-router-dom";

const RutasAcordeon = (props) => {
    return (
        <AccordionDetails>
            <Link to={props.ruta}>{props.nombre}</Link>
        </AccordionDetails>
    )
}
export default RutasAcordeon;