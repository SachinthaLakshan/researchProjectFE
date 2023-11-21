import { Box, Button, Card, CardActions, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import PropTypes from 'prop-types';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { green, red } from "@mui/material/colors";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import SyncIcon from '@mui/icons-material/Sync';
import { Link } from "react-router-dom";


function CustomTabPanel(props) {
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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function StartPage(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Container maxWidth="sm"  sx={{marginTop:15}}>
            <Card sx={{ borderRadius: 5 }} >
                <CardContent sx={{
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    backgroundImage: "linear-gradient(to right, #fff 0%, #C9EAF9 100%)"

                }}>

                    <Typography variant="h6" component="div">
                        {props.title}
                    </Typography>
                    <Box sx={{ width: "100%", height: 3, backgroundColor: "#0008" }}></Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:'center', width: "100%",  alignItems: "center" }} >
                        <List  >

                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }} >
                                    <DoneOutlineIcon  />
                                </ListItemIcon>
                                <ListItemText primary="Conducted : 2" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                <DoneOutlineIcon sx={{color:green[500]}}  />
                                </ListItemIcon>
                                <ListItemText primary="Completed : 3" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Filtered Out : 4" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <DoNotDisturbAltIcon sx={{color:red[500]}} />
                                </ListItemIcon>
                                <ListItemText primary="Not Completed : 0" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <SyncIcon />
                                </ListItemIcon>
                                <ListItemText primary="Syncing : 0" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <AttachFileIcon />
                                </ListItemIcon>
                                <ListItemText primary="Attachments : 0" />
                            </ListItem>
                        </List>
                        <Link to="/paper">
                        <Button size="large" variant="contained" endIcon={<SendIcon />}>
                            Start
                        </Button>
                        </Link>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ width: "50%" }} label="Conducted" {...a11yProps(0)} />
                                <Tab sx={{ width: "50%" }} label="6 Weeks History" {...a11yProps(1)} />

                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            No subjects available.
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            No subjects available.
                        </CustomTabPanel>

                    </Box>

                </CardContent>

            </Card>
        </Container>

    );
}

export default StartPage;