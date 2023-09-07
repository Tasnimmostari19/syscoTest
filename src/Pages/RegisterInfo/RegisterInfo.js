import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import './RegisterInfo.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../Redux/Slices/companySlice';

const RegisterInfo = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [domain, setDomain] = useState('')
    const [district, setDistrict] = useState('')
    const [division, setDivision] = useState('')
    const [address, setAddress] = useState('')
    const dispatch = useDispatch();
    const District = [
        {
            name: 'dhaka'
        }

    ];
    const Division = [
        {
            name: 'dhaka'
        },
        {
            name: 'ctg'
        }

    ];

    const handleSubmit = () => {

        const data = {
            'name': name,
            'domain': domain,
            'district': district,
            'division': division,
            'address': address
        }



        // console.log(data);

        if (name && domain && district && division) {
            dispatch(addCompany(data))
            navigate('/dashboard')
        }





    }

    return (
        <Box className='register-main'>
            <Box component="form" noValidate autoComplete="off" sx={{ backgroundColor: '#FFFFFF', width: '50%', height: '500px', padding: '20px 30px', borderRadius: '34px' }}>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        label="Company Name"
                        placeholder="Enter your Name"
                        variant="outlined"
                        sx={{ margin: "12px 0" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        label="Domain"
                        placeholder="Enter Domain"
                        variant="outlined"
                        sx={{ margin: "12px 0" }}
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        sx={{ margin: "12px 0" }}
                        onChange={(e) => setDistrict(e.target.value)}

                    >
                        {District.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        sx={{ margin: "12px 0" }}
                        onChange={(e) => setDivision(e.target.value)}

                    >
                        {Division.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        label="Address"
                        placeholder="Address"
                        variant="outlined"
                        sx={{ margin: "12px 0", borderRadius: '17px' }}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </FormControl>

                <Button
                    variant="contained"
                    disableElevation
                    onClick={handleSubmit}
                    sx={{
                        width: '100%',
                        backgroundColor: "#0046FF",
                        marginTop: "40px",
                        borderRadius: '20px',
                        '&:hover': { backgroundColor: '#0046FF' }
                    }}>
                    Let’s Go
                </Button>

            </Box>
        </Box>
    );
};

export default RegisterInfo;