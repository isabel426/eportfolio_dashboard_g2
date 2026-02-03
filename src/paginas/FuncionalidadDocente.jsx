import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from '../componentes/CustomTabPanel.jsx';
import PlanificarCriterios from '../componentes/PlanificarCriterios.jsx';
import EvaluarEvidencias from '../componentes/EvaluarEvidencias.jsx';
import AsignarRevisiones from '../componentes/AsignarRevisiones.jsx';



const FuncionalidadDocente = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="PLANIFICAR CRITERIOS" />
                        <Tab label="EVALUAR EVIDENCIAS" />
                        <Tab label="ASIGNAR REVISIONES" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <PlanificarCriterios></PlanificarCriterios>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <EvaluarEvidencias></EvaluarEvidencias>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <AsignarRevisiones></AsignarRevisiones>
                </CustomTabPanel>
            </Box>
        </div>

    );
};

export default FuncionalidadDocente;
