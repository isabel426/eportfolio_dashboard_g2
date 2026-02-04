import { useContext, useState } from "react";
import modulos from "../mocks/mock-impartidos.js"
import UserContext from "../contextos/UserContext.jsx"
import { useEffect } from "react";
import getAllModulosImpartidos from "../servicios/getAllModulosImpartidos.js";

function useMisModulosImpartidos() {
    
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerModulosImpartidos() {

        setBuscando(true);

        getAllModulosImpartidos().then((modulos) => {

            setLista(modulos.data);
            setBuscando(false);

        });
    }

    useEffect(obtenerModulosImpartidos, []);



    return {buscando, lista}


}

export default useMisModulosImpartidos;