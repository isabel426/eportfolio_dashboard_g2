function getTareasPorRA() {//servicio

    const URL = "http://eportfolio.test/api/v1/resultados-aprendizaje/1/tareas";

    return fetch(URL)
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return([])//devolvemos una lista vacía
        });
}

export default getTareasPorRA;