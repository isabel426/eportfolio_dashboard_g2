function getAllModulosMatriculados(token) {//servicio

    const URL = "http://eportfolio.test/api/v1/modulos-matriculados";

    return fetch(URL, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return([])
        });
}

export default getAllModulosMatriculados;