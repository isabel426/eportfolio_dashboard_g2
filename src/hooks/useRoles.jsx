import { useContext, useState } from "react";
import roles from '../mocks/mock-roles.js'
import UserContext from "../contextos/UserContext.jsx"

function useRoles() {

    const user = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(roles[user].roles);

    return {buscando, lista}


}

export default useRoles;