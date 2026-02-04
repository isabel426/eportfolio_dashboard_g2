function getAllFamiliasProfesionales() {

    const URL = "http://eportfolio.test/api/v1/familias-profesionales";

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