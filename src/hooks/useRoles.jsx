import { useEffect, useState } from "react";
import getAllRoles from "../servicios/getAllRoles";

function useRoles() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerRoles() {

        setBuscando(true);

        getAllRoles().then((roles) => {

            const listaRoles = roles.data
            setLista(listaRoles);
            setBuscando(false);

        });
    }

    useEffect(obtenerRoles, []); // se ejecuta una vez al cargar

    return { buscando, lista };
}

export default useRoles;
