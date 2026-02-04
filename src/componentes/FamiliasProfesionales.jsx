import useFamiliasProfesionales from "../hooks/useFamiliasProfesionales";
import BasicTable from "./BasicTable";
const FamiliasProfesionales = () => {

    const {buscando, lista} = useFamiliasProfesionales();

    const columns = [
        { header: "ID", accessor: "id" },
        { header: "Nombre", accessor: "nombre" },
        { header: "Descripción", accessor: "descripcion" },
    ];

    return (
        <div>
            <h2>Familias Profesionales</h2>
            <BasicTable columns={columns} data={lista} />
        </div>
    );


}

export default FamiliasProfesionales;