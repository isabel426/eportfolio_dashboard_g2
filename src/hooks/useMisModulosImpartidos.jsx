import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosImpartidos from "../servicios/getAllModulosImpartidos.js";
import TokenContext from "../contextos/TokenContext.jsx";

function useMisModulosImpartidos() {
    
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const token = useContext(TokenContext);


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