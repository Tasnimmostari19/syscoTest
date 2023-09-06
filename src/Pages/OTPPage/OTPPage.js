import { Box, Button, Grid, Typography } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input'
import otpImg from '../../image/unsplash_kLfkVa_4aXM.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPPage = () => {
    const [otp, setOtp] = useState("");
    const passCode = '1234'
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(otp);
        if (otp === passCode) {
            navigate('/register')
        }
    }

    const handleChange = (newValue) => {
        console.log(newValue);
        setOtp(newValue)
    }
    return (
        <div style={{ fontFamily: 'Poppins' }}>
            <Grid container className="main">
                <Grid item lg={6}>
                    <Box sx={{ margin: { md: "0 112px", xs: "0 35px" } }}>
                        <Box sx={{ margin: "70px 0" }}>

                            <Typography variant="body1" sx={{ fontSize: "14px", color: "#95989A", marginTop: "16px" }}>
                                Enter OTP
                            </Typography>
                        </Box>
                        <Box component="form" noValidate autoComplete="off"

                        >
                            <MuiOtpInput
                                value={otp}
                                onChange={handleChange}
                                sx={{ marginTop: "150px" }} />
                            <Button

                                variant="contained"
                                disableElevation
                                onClick={handleSubmit}
                                sx={{
                                    width: '100%',
                                    backgroundColor: "#0046FF",
                                    borderRadius: '8px',
                                    marginTop: "160px",
                                    '&:hover': { backgroundColor: '#0046FF' }
                                }}
                            >
                                Submit
                            </Button>
                            <Typography variant="body1" sx={{ fontSize: "14px", margin: "24px 0 240px 0", textAlign: "center" }}>
                                Resend OTP
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: { xs: 'none', lg: 'block' }, backgroundColor: '#0046FF', color: 'white' }}>
                    <Box>
                        <img src={otpImg} height={'472px'} alt="" />
                    </Box>
                    <Box sx={{ padding: '30px 20px' }}>
                        <Typography sx={{ fontSize: '36px', fontFamily: 'Poppins' }}>Access from anywhere</Typography>
                        <Typography sx={{ fontFamily: 'Poppins' }}>You can access to your account from anywhere in the world. An admin of todaroko can handle the fuel station even he is not in the station. He can track the sales, employee info etc.</Typography>
                    </Box>

                </Grid>
            </Grid>
        </div>
    );
};

export default OTPPage;