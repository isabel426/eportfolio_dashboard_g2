function getAllModulosMatriculados() {//servicio

    const URL = "http://eportfolio.test/api/v1/modulos-matriculados";

    return fetch(URL)
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return([])
        });
}

export default getAllModulosMatriculados;