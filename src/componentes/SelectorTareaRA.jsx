import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { OutlinedInput } from '@mui/material';
import useTareasPorRA from '../hooks/useTareasPorRA';

const SelectorTareaRA = (props) => {

    const tareasPorRA = useTareasPorRA();
    const [estadoEvidencia, setEstadoEvidencia] = useState("");

    const handleChange = (event) => {
        setEstadoEvidencia(event.target.value);
        props.manejarTarea(event.target.value);
    };

    function generarEvidencia(evidencia, index) {
        return <MenuItem value={evidencia} key={index}>{evidencia.observaciones}</MenuItem>
    }

    console.log(tareasPorRA);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={estadoEvidencia}
                    label={estadoEvidencia}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                >
                            { tareasPorRA.lista.map(generarEvidencia) }
                </Select>
        </FormControl>
        </Box >
    );
}

export default SelectorTareaRA;