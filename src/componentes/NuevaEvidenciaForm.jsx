import { useContext } from "react";
import UserContext from "../contextos/UserContext";
import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";

const NuevaEvidenciaForm = (props) => {

    const user = useContext(UserContext);

    const TAREA = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "URL",
        DESCRIPCION: "descripción",
        ESTADO_VALIDACION: "estado_validacion"
    }

    const OBJETOINICIAL = {
        tarea_id: props.tarea.id,
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
        watch } = useForm({ defaultValues: OBJETOINICIAL });


    const manejarFormulario = handleSubmit((tarea) => {

        props.manejarEvidencia(tarea);

        reset(OBJETOINICIAL)
    })

    return (
        <Box
            sx={{ '& > :not(style)': { marginTop: 2, width: '100%' } }}
            noValidate
            autoComplete="off"
        >
            <form onSubmit={manejarFormulario}>
                <TextField id={TAREA.URL} label="URL" variant="outlined" fullWidth
                    {...register("url",
                        {
                            required: {
                                value: true,
                                message: "La URL es obligatoria"
                            },

                            pattern: {
                                value: "/^(https?:\/\/).+/",
                                message: "La URL tiene que ser válida"
                            }
                        }
                    )}

                /><br></br><span>{errors.url?.message}</span><br></br>

                <TextField id={TAREA.DESCRIPCION} label="Observaciones" variant="outlined" multiline rows={4} fullWidth
                    {...register("descripcion",
                        {
                            required: {
                                value: true,
                                message: "La descripción es obligatoria"
                            }
                        }
                    )}

                /><br></br><span>{errors.descripcion?.message}</span><br></br>

                <Button type="submit" variant="contained">Añadir Evidencia</Button>
            </form>
        </Box>
    )
}

export default NuevaEvidenciaForm;