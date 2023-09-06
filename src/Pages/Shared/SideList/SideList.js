import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const SideList = ({ item, index, selectedItem, handleChangeSelectedItem }) => {
    const SideNavItemBox = index === selectedItem ? styled(Box)(({ theme }) => ({
        display: 'flex',
        paddingX: '35px',
        backgroundColor: 'rgba(208, 188, 255, 0.08)',
        borderRadius: '8px',
        border: '2px solid #0046FF',
    })) : styled(Box)(({ theme }) => ({
        display: 'flex',
        paddingX: '35px',
        border: '2px solid #0046FF',
        '&:hover': {
            backgroundColor: 'rgba(208, 188, 255, 0.08)',
            borderRadius: '8px',
        },

    }));
    return (
        <div>
            <Link to={item.path} style={{ textDecoration: 'none' }} onClick={() => handleChangeSelectedItem(index)}>
                <SideNavItemBox sx={{ display: 'flex', paddingX: '35px', paddingY: '14px', marginX: '8px', }} >

                    <Typography sx={{ color: '#FFFFFF', fontSize: '18px', marginLeft: '20px' }}>{item.title}</Typography>
                </SideNavItemBox>
            </Link>
        </div>
    );
};

export default SideList;