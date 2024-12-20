import React, { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaBoxes } from 'react-icons/fa';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Container,  Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import { IoExitOutline } from "react-icons/io5";
import { HiOutlineBars3BottomRight, HiOutlineBars3  } from "react-icons/hi2";
import Avatar from '@mui/material/Avatar';

const items = [
    { key: '1', icon: <MdSpaceDashboard />, label: 'Dashbord', path: '/app' },
    { key: '2', icon: <FaBoxes />, label: 'Produtos', path: '/app/produto' }
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
            <Drawer variant="permanent" open={!collapsed} sx={{
                    width: collapsed ? 60 : 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: collapsed ? 60 : 240,
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                        display: 'flex',   
                        backgroundColor: 'rgb(24, 26, 27)',
                        color: 'white'
                    },
                }}
            >
                <div>
                    <Container style={{ display: 'flex', alignItems: 'center', padding: 8, marginTop: '5%' }}>
                        {!collapsed ? <Box component="img" sx={{width:'80%', display: 'flex'}} alt="Logo da empresa" src={logo}/> : ""}
                        <IconButton onClick={toggleCollapsed} color="primary">
                           {collapsed ? <HiOutlineBars3 style={{color: 'white'}} />: <HiOutlineBars3BottomRight style={{color: 'white'}} /> }
                        </IconButton>
                    </Container>
                    <hr color='white' style={{ width: '90%'}} />
                    <List>
                        {items.map((item) => (
                            <ListItem button key={item.key} style={{ cursor: 'pointer' }} onClick={() => handleNavigation(item.path)}>
                                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                {!collapsed && <ListItemText primary={item.label} />}
                            </ListItem>
                        ))}
                    </List>
                </div>

                <Container style={{ display: 'flex', alignItems: 'center', padding: 10, justifyContent:'center', gap:'20px', backgroundColor:'#2d3471' }}>
                    <Avatar alt="Remy Sharp" src={avatar}/>
                    {!collapsed  &&
                    <>
                        <div style={{flexDirection: 'column', display:'flex'}}>
                            <label>Samuel Alves</label> 
                            <label>Teach Lead</label> 
                        </div>
                        <IconButton variant='contained' style={{color: 'white'}}>
                         <IoExitOutline />
                        </IconButton>
                    </>}
                </Container>
            </Drawer>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', transition: 'width 0.1s linear' }}>
                <div style={{ width: '100%', flex: 1, display: 'flex' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavBarView;
