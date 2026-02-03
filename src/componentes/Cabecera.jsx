import { useContext } from "react";
import TokenContext from "../contextos/TokenContext";

const Cabecera = (props) => {

    const token = useContext(TokenContext);

    return(
        <header>
            <h1>HEADER</h1>
            <p>Isabel</p>
        </header>
    )
}

export default Cabecera;