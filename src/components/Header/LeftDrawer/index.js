import {
    AccountBoxOutlined,
    CreateOutlined, Event, HomeOutlined, LogoutOutlined
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from 'assets/images/logo.png';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function LeftDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(!state);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
            className="header-drawer"
        >
            <List className="header-drawer__logo">
                <img src={logo} style={{ height: '35px' }}/>
            </List>
            <Divider />
            <List>
                <Link to="/" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <HomeOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Trang chủ" />
                    </ListItem>
                </Link>
                <Link to="/note" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <CreateOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Ghi chú đơn" />
                    </ListItem>
                </Link>
                <Link to="/calendar" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <Event/>
                        </ListItemIcon>
                        <ListItemText primary="Lịch và đặt lịch" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <AccountBoxOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Tài khoản" />
                </ListItem>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <LogoutOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Đăng xuất" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer()} disableTouchRipple>
                    <MenuIcon/>
                </Button>
                <Drawer
                    anchor="left"
                    open={state}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
