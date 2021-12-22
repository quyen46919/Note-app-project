import { Assessment, Settings, VpnKey } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import EmptyPage from 'pages/EmptyPage';
import PropTypes from 'prop-types';
import * as React from 'react';
import TabPage from '../TabPage';
import './styles.scss';

const useStyles = makeStyles({
    icon: {
        minHeight: 48,
        backGroundColor: 'red'
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            className='account-vertical-tab__panel'
            role="tabpanel"
            hidden={value !== index}
            id={`account-vertical-tabpanel-${index}`}
            aria-labelledby={`account-vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `account-vertical-tab-${index}`,
        'aria-controls': `account-vertical-tabpanel-${index}`
    };
}

export default function AccountVerticalTab() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            className="account-vertical-tab"
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
        >
            <Tabs
                className="account-vertical-tab__tab"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab
                    className={`account-vertical-tab__drawer ${classes.icon}`}
                    label="Gần đây"
                    icon={<div><Assessment className={classes.icon} /></div>}
                    {...a11yProps(0)} />
                <Tab
                    className="account-vertical-tab__drawer"
                    label="Ghi chú nhỏ"
                    icon={<div><VpnKey className={classes.icon} /></div>}
                    {...a11yProps(1)} />
                <Tab
                    className="account-vertical-tab__drawer"
                    label="Nâng cấp"
                    icon={<div><Settings className={classes.icon} /></div>}
                    {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TabPage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EmptyPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EmptyPage />
            </TabPanel>
        </Box>
    );
}
