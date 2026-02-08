import { useContext, useState } from "react";
import { useEffect } from "react";
import getTareasPorRA from "../servicios/getTareasPorRA.js";

function useTareasPorRA() {

    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);


    function obtenerTareasPorRA() {

        setBuscando(true);

        getTareasPorRA().then((modulos) => {

            setLista(modulos?.data || []);
            setBuscando(false);

        });
    }

    useEffect(obtenerTareasPorRA, []);


    return { buscando, lista }


}

export default useTareasPorRA;