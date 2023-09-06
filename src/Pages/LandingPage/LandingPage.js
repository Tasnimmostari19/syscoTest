import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import './LandingPage.css'
import LandingImg from '../../image/bro.png'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [phone, setPhone] = useState()
    const navigate = useNavigate()

    const handlePhone = e => {
        const phoneNo = e.target.value
        setPhone(phoneNo)
    }

    const SubmitRegister = () => {

        navigate('/OTP')

    }
    const SubmitLogin = () => {

    }
    return (
        <div className='main'>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Box sx={{ margin: { md: "0 112px", xs: "0 35px" } }}>

                        <Box sx={{ margin: "250px 30px 0 0" }}>
                            <Typography sx={{ fontSize: '34px', fontFamily: 'Poppins' }}>
                                Control your
                            </Typography>
                            <Typography sx={{ color: '#0046FF', fontSize: '34px', fontFamily: 'Poppins', fontWeight: 700 }}>
                                Station at a place
                            </Typography>
                        </Box>
                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    label="Your Phone Number"
                                    placeholder="01XXXXXXXXX"
                                    variant="outlined"
                                    sx={{ margin: "12px 0" }}
                                    // color="#0046FF"
                                    // focused
                                    // value={mobileNumber}
                                    onChange={(e) => handlePhone(e)}
                                    aria-describedby="number-text"
                                    // error={numberError != null}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">+88</InputAdornment>,
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Button

                                    variant="contained"
                                    disableElevation
                                    onClick={SubmitRegister}
                                >
                                    Register
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>

                                <Typography>Already have an account?</Typography>
                                <Button

                                    variant="contained"
                                    disableElevation
                                    onClick={SubmitLogin}
                                >
                                    Login
                                </Button>


                            </Grid>


                        </Grid>

                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box sx={{ margin: '100px 0 20px 0', display: { xs: 'none', md: 'block' } }}>
                        <img src={LandingImg} width={'750px'} height={'430px'} alt="" />

                    </Box>
                    <Box sx={{ margin: '230px 0 20px 0', display: { xs: 'block', md: 'none' } }}>
                        <img src={LandingImg} width={'250px'} height={'130px'} alt="" />

                    </Box>


                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;