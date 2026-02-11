function getAllFamiliasProfesionales() {

    const URL = "https://mocki.io/v1/864a01f5-785e-4469-a55c-fc4afd42224b";

    return fetch(URL)
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return([])
        });
}

export default getAllFamiliasProfesionales;