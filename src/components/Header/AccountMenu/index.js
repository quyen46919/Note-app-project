import { PersonOutline } from '@mui/icons-material';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import { IconButton, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import * as React from 'react';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight: 1 }}>
                <Tooltip title="Thông tin tài khoản">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar
                            alt="user avatar"
                            sx={{ width: 35, height: 35 }}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47c09177275483.5c82b10d5f62c.png"
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        },
                        '& li': {
                            padding: '0 1rem',
                            minHeight: '36px'
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem style={{ padding: '0!important' }}>
                    <ListItemIcon style={{ fontSize: '12px!important' }}>
                        <PersonOutline fontSize="small" />
                    </ListItemIcon>
                    <p style={{ margin: 0, fontSize: 15 }}>
                        Thông tin cá nhân
                    </p>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <p style={{ margin: 0, fontSize: 15 }}>
                        Cài đặt
                    </p>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <p style={{ margin: 0, fontSize: 15 }}>
                        Đăng xuất
                    </p>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
