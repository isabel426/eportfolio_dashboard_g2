import { useContext, useEffect, useState } from "react";
import getAllRoles from "../servicios/getAllRoles";
import UserContext from "../contextos/UserContext";

function useRoles() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const user = useContext(UserContext);
    

    function obtenerRoles() {

        setBuscando(true);

        getAllRoles().then((data) => {

            const listaRoles = data[0][user]?.roles || []
            setLista(listaRoles);
            setBuscando(false);

        });
    }

    useEffect(obtenerRoles, []); // se ejecuta una vez al cargar

    return { buscando, lista };
}

export default useRoles;
