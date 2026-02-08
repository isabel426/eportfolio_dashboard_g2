import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosMatriculados from "../servicios/getAllModulosMatriculados.js";

function useMisModulosMatriculados() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const token = "1|munpzZNeK8GuxGvY1ZfHkc43wy05pABfFcdFsCu208952e38";

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