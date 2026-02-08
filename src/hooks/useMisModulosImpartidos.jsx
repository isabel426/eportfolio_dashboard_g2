import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosImpartidos from "../servicios/getAllModulosImpartidos.js";

function useMisModulosImpartidos() {
    
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const token = "1|munpzZNeK8GuxGvY1ZfHkc43wy05pABfFcdFsCu208952e38";


    function obtenerModulosImpartidos() {

        setBuscando(true);

        getAllModulosImpartidos(token).then((modulos) => {

            setLista(modulos?.data || []);
            setBuscando(false);

        });
    }

    useEffect(obtenerModulosImpartidos, []);

    return {buscando, lista}
}

export default useMisModulosImpartidos;