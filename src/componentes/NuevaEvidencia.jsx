import { useState } from "react";
import NuevaEvidenciaForm from "./NuevaEvidenciaForm";
import SelectorTareaRA from "./SelectorTareaRA";

const NuevaEvidencia = () => {

    const [tarea, setTarea] = useState({id: 5, descripcion: "Hola"});

    function manejarTarea(tareaSeleccionada) {
        setTarea(tareaSeleccionada);
    }

    function manejarEvidencia(evidencia) {
        console.log("EVIDENCIA CREADA", evidencia)
    }

    return (
        <>
            <SelectorTareaRA manejarTarea={manejarTarea}></SelectorTareaRA>
            <NuevaEvidenciaForm tarea={tarea} manejarEvidencia={manejarEvidencia}></NuevaEvidenciaForm>
        </>
    )

}

export default NuevaEvidencia;