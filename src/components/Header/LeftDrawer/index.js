import {
    CreateOutlined, FavoriteBorder, HomeOutlined, LightOutlined, PersonOutlined, TranslateOutlined
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
                LOGO
            </List>
            <Divider />
            <List>
                <Link to="/" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <HomeOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Giới thiệu" />
                    </ListItem>
                </Link>
                <Link to="/home" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <CreateOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Trang chủ" />
                    </ListItem>
                </Link>
                <Link to="/home/account" exact="true" className="header-drawer__link">
                    <ListItem button className="header-drawer__list-item">
                        <ListItemIcon>
                            <PersonOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Cá nhân" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <FavoriteBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Danh sách yêu thích" />
                </ListItem>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <TranslateOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Đổi ngôn ngữ" />
                </ListItem>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <LightOutlined/>
                    </ListItemIcon>
                    <ListItemText primary="Chế độ tối" />
                </ListItem>
                <ListItem button className="header-drawer__list-item">
                    <ListItemIcon>
                        <NotificationsNoneOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Thông báo" />
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
