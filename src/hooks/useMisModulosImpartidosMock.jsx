import { useContext, useState } from "react";
import modulos from "../mocks/mock-impartidos.js"
import UserContext from "../contextos/UserContext.jsx"

function useMisModulosImpartidos() {
    
    const user = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(modulos[user].lista);

    return {buscando, lista}


}

export default useMisModulosImpartidos;