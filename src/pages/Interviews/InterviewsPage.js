import { Avatar, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import StartPage from "../start/StartPage";
import { useState } from "react";


function InterviewsPage() {

    const [interviewSelected, setInterviewSelected] = useState(false)
    const [interview, setInterview] = useState();

    const data = [
        {
            title: "ATU Research 2023 W1",
            interviews: 4,
            attachments: 1,
            version: 12
        },
        {
            title: "Calculation Examples",
            interviews: 6,
            attachments: 1,
            version: 1
        },
        {
            title: "Force GPS Capture Example",
            interviews: 4,
            attachments: 12,
            version: 2
        },
        {
            title: "Kish Grid Example",
            interviews: 64,
            attachments: 1,
            version: 12
        },
        {
            title: "ATU Research 2023 W1",
            interviews: 4,
            attachments: 12,
            version: 12
        }
    ]

    const onCarkClick = (obj) => {
        setInterview(obj)
        setInterviewSelected(true);
    }

    return (
        <Container component="main" maxWidth="xs">
            {interviewSelected ? <StartPage title={interview.title} /> :
                <Box>
                    <Typography variant="h5" mt={2} sx={{ fontWeight: 800 }} component="div">
                        Welcome, tap a survey to conduct 06229692
                        interviews
                    </Typography>
                    <CssBaseline />
                    {
                        data.map((obj, index) => (
                            <Box
                                sx={{
                                    margin: 2,
                                    display: 'flex',
                                    flexDirection: 'column',


                                }}

                            >
                                <Card sx={{ borderRadius: 5 }}  >
                                    <CardContent sx={{
                                        alignItems: "flex-start",
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundImage: "linear-gradient(to right, #fff 0%, #C9EAF9 100%)"

                                    }}>

                                        <Typography variant="h6" component="div">
                                            {obj.title}
                                        </Typography>
                                        <Box sx={{ width: "100%", height: 3, backgroundColor: "#0008" }}></Box>
                                        <Box
                                            sx={{

                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'

                                            }}

                                        >

                                            <List sx={{ width: '100%', maxWidth: 360, }}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <GroupIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={`Interviews : ${obj.interviews}`} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <AttachFileIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={`Attachments : ${obj.attachments}`} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <LibraryAddCheckIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={`Version : ${obj.version}`} />
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ backgroundImage: "linear-gradient(to right, #fff 0%, #C9EAF9 100%)" }}>
                                        <Button size="small" onClick={() => onCarkClick(obj)}>Open Interview</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
            }
        </Container>

    );
}

export default InterviewsPage;