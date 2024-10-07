import React from 'react';
import TextField from '@mui/material/TextField';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import InputAdornment from '@mui/material/InputAdornment';

import './temperatureConverter.css';

const slotProps = (sign) => ({
    input: {
        startAdornment: <InputAdornment position="start">{sign}</InputAdornment>,
    },
})

const convert = (id, value) => {
    if (id === 'clc') {
        return parseFloat(value) * 1.8 + 32;
    } else {
        return (parseFloat(value) - 32) / 1.8;
    }
}

export const TemperatureConverter = () => {
    const handleChange = (e) => {
        const { id, value } = e.target;

        //выбираем поле в котором нет ввода
        const el = document.getElementById(id === 'clc' ? 'frg' : 'clc');

        el.value = convert(id, value) || '';
    }

    return (
        <div className='fieldsConteiner'>
            <TextField onChange={handleChange} id='clc' label="Цельсий" sx={{ m: 1, width: '25ch' }}
                slotProps={slotProps('°C')} />

            <SyncAltIcon className='colorIcon' />

            <TextField onChange={handleChange} id='frg' label="Фаренгейт" sx={{ m: 1, width: '25ch' }}
                slotProps={slotProps('°F')} />
        </div>
    )
}

