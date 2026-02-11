import { useContext, useState } from "react";
import { useEffect } from "react";
import getAllModulosImpartidos from "../servicios/getAllModulosImpartidos.js";
import TokenContext from "../contextos/TokenContext.jsx";
import UserContext from "../contextos/UserContext.jsx";

function useMisModulosImpartidos() {
    
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const user = useContext(UserContext);

    function obtenerModulosImpartidos() {

        setBuscando(true);

        getAllModulosImpartidos().then((data) => {

            const modulos = data[0][user]?.lista || []

            setLista(modulos);
            setBuscando(false);

        });
    }

    useEffect(obtenerModulosImpartidos, []);

    return {buscando, lista}
}

export default useMisModulosImpartidos;