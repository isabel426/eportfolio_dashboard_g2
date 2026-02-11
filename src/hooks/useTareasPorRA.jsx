import { useContext, useState } from "react";
import { useEffect } from "react";
import getTareasPorRA from "../servicios/getTareasPorRA.js";

function useTareasPorRA() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);


    function obtenerTareasPorRA() {

        setBuscando(true);

        getTareasPorRA().then((data) => {

            const tareas = data[0]?.lista || []

            setLista(tareas);
            setBuscando(false);

        });
    }

    useEffect(obtenerTareasPorRA, []);


    return { buscando, lista }


}

export default useTareasPorRA;