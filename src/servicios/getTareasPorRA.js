function getTareasPorRA() {//servicio

    const URL = "https://mocki.io/v1/53f1998d-f27d-4d84-8ce9-81405e119b83";

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