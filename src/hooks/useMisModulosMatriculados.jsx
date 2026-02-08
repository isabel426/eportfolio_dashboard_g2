import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosMatriculados from "../servicios/getAllModulosMatriculados.js";
import TokenContext from "../contextos/TokenContext.jsx";

function useMisModulosMatriculados() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const token = useContext(TokenContext);

    function obtenerModulosMatriculados() {

        setBuscando(true);

        getAllModulosMatriculados(token).then((modulos) => {

            setLista(modulos?.data || []);
            setBuscando(false);

        });
    }

    useEffect(obtenerModulosMatriculados, []);


    return { buscando, lista }


}

export default useMisModulosMatriculados;