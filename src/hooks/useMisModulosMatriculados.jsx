import { useContext, useState } from "react";
import matriculados from "../mocks/mock-matriculados.js"
import UserContext from "../contextos/UserContext.jsx"

function useMisModulosMatriculados() {
    const user = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(matriculados[user].lista);


    return {buscando, lista}
}

export default useMisModulosMatriculados;