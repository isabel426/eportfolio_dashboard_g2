import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import CustomTabPanel from '../componentes/CustomTabPanel.jsx';
import ProgresoCompletoAlumno from '../componentes/ProgresoCompletoAlumno.jsx';
import NuevaEvidencia from '../componentes/NuevaEvidencia.jsx';
import RevisionesPendientes from '../componentes/RevisionesPendientes.jsx';


const FuncionalidadEstudiante = () => {


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="MI PROGRESO COMPLETO" />
                        <Tab label="SUBIR NUEVA EVIDENCIA" />
                        <Tab label="MIS REVISIONES PENDIENTES" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <ProgresoCompletoAlumno></ProgresoCompletoAlumno>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <NuevaEvidencia></NuevaEvidencia>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <RevisionesPendientes></RevisionesPendientes>
                </CustomTabPanel>
            </Box>
        </div>

    );
};

export default FuncionalidadEstudiante;
