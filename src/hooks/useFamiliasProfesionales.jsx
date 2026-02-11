import { useContext, useState } from "react";
import UserContext from "../contextos/UserContext.jsx"
import { useEffect } from "react";
import getAllFamiliasProfesionales from "../servicios/getAllFamiliasProfesionales.js";

function useFamiliasProfesionales() {
    
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerFamiliasProfesionales() {

        setBuscando(true);

        getAllFamiliasProfesionales().then((familias) => {

            setLista(familias || []);
            setBuscando(false);

        });
    }

    useEffect(obtenerFamiliasProfesionales, []);



    return {buscando, lista}


}

export default useFamiliasProfesionales;