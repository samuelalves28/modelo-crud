import React, { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaBoxes, FaBars, FaTimes } from 'react-icons/fa';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const items = [
    { key: '1', icon: <MdSpaceDashboard />, label: 'Dashbord', path: '/app' },
    { key: '3', icon: <FaBoxes />, label: 'Produtos', path: '/app/produto' }
];

const NavBarView = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
            <Drawer
                variant="permanent"
                open={!collapsed}
                sx={{
                    width: collapsed ? 60 : 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: collapsed ? 60 : 240,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgb(24, 26, 27)',
                        color: 'white'
                    },
                }}
            >
                <List>
                    {items.map((item) => (
                        <ListItem button key={item.key} style={{ cursor: 'pointer' }} onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                            {!collapsed && <ListItemText primary={item.label} />}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', transition: 'width 0.1s linear' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 8 }}>
                    <IconButton onClick={toggleCollapsed} color="primary">
                        {collapsed ? <FaBars /> : <FaTimes />}
                    </IconButton>
                </div>

                <div style={{ width: '100%', flex: 1, display: 'flex' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavBarView;
