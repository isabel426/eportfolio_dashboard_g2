function getAllRoles() {//servicio

    const URL = "https://mocki.io/v1/17290d46-4fe8-47b3-9c14-8888eba7f345";

    return fetch(URL)
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return([])//devolvemos una lista vacía
        });
}

export default getAllRoles;