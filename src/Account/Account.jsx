import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getUserToken, baseURL } from '../../utils';
import style from './account.module.css'
import MyAccount from './MyAcccount/MyAccount';
import Campaigns from './Campaigns/Campaigns';
import Orders from './Orders/Orders';
import Address from './Address/Address';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
const Account = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const token = getUserToken()

    const [data, setData] = useState('')

    useEffect(() => {
        axios.get(baseURL + `Account/getprofile?token=string`)
            .then(response => setData(response.data.obj));
    }, [])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="My Account" />
                    <Tab label="Orders" />
                    <Tab label="Addresses" />
                    <Tab label="Campaigns" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <MyAccount
                    data={data}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Orders

                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={2}>

                <Campaigns
                    phonenumber={data && data.client.phonenumber}
                />
            </TabPanel>
        </div>
    );
}

export default Account;

