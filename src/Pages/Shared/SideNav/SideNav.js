import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SideList from '../SideList/SideList';

const sideNavData = [
    {
        title: 'Dashboard',
        path: '/dashboard',

    },
    {
        title: 'Add Stock',
        path: '/add-stock'

    },
    {
        title: 'Billing',
        path: '/billing'
    },
    {
        title: 'Accounts',
        path: '/accounts'
    },
    {
        title: 'HRM',
        path: '/hrm'
    },
    {
        title: 'Reporting',
        path: '/reporting'
    },
    {
        title: 'Settings',
        path: '/settings',

    },
]

const SideNav = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleChangeSelectedItem = (index) => {
        setSelectedItem(index);
    }

    return (
        <div style={{ display: 'flex' }}>
            <Box sx={{ width: '343px', backgroundColor: '#0046FF', height: '100vh' }}>

                <Box sx={{ paddingTop: '38px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '40px', marginLeft: '50px' }}>todarak</Typography>
                    {
                        sideNavData?.map((item, index) =>
                            <SideList

                                item={item}
                                key={index}
                                index={index}
                                selectedItem={selectedItem}
                                handleChangeSelectedItem={handleChangeSelectedItem}
                            />
                        )
                    }
                </Box>
            </Box>
            <main>{children}</main>
        </div>
    );
};

export default SideNav;