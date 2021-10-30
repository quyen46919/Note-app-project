import { AccessTime, PresentToAll, WorkOutline } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import FolderPage from '../FolderPage';
import './styles.scss';
import { initialNoteData } from 'assets/initialNoteData';

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
            className='vertical-tab__panel'
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            className="vertical-tab"
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
        >
            <Tabs
                className="vertical-tab__tab"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab
                    className={`vertical-tab__drawer ${classes.icon}`}
                    label="Gần đây"
                    icon={<div><AccessTime className={classes.icon} /></div>}
                    {...a11yProps(0)} />
                <Tab
                    className="vertical-tab__drawer"
                    label="Ghi chú nhỏ"
                    icon={<div><WorkOutline className={classes.icon} /></div>}
                    {...a11yProps(1)} />
                <Tab
                    className="vertical-tab__drawer"
                    label="Nâng cấp"
                    icon={<div><PresentToAll className={classes.icon} /></div>}
                    {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FolderPage data={initialNoteData}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Ghi chú nhỏ
            </TabPanel>
            <TabPanel value={value} index={2}>
                Nâng cấp
            </TabPanel>
        </Box>
    );
}
