import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import EmptyPage from 'pages/EmptyPage';
import PropTypes from 'prop-types';
import * as React from 'react';
import SmallTab from '../SmallTab';

const useStyles = makeStyles({
    tab: {
        textTransform: 'initial!important',
        fontSize: '16px!important',
        paddingLeft: '0!important'
    },
    tabPanel: {
        '& div': {
            padding: '0!important'
        }
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function AccountTabPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: '#43B5FF', justifyContent: 'flex-start' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Thông tin" {...a11yProps(0)} className={classes.tab}/>
                    <Tab label="Tình trạng" {...a11yProps(1)} className={classes.tab}/>
                    <Tab label="Kỹ năng" {...a11yProps(2)} className={classes.tab}/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
                <SmallTab/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EmptyPage/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EmptyPage/>
            </TabPanel>
        </Box>
    );
}
