import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosMatriculados from "../servicios/getAllModulosMatriculados.js";
import TokenContext from "../contextos/TokenContext.jsx";
import UserContext from "../contextos/UserContext.jsx";

function useMisModulosMatriculados() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const user = useContext(UserContext);

    function obtenerModulosMatriculados() {

        setBuscando(true);

        getAllModulosMatriculados().then((data) => {
 
            const modulos = data[0][user]?.lista || []
            setLista(modulos);
            setBuscando(false);

        });
    }

    useEffect(obtenerModulosMatriculados, []);


    return { buscando, lista }


}

export default useMisModulosMatriculados;