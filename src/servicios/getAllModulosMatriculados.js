function getAllModulosMatriculados() {//servicio

    const URL = "https://mocki.io/v1/52c87ee6-b873-444b-97c9-1ee75ba5fcef";

    return fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
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