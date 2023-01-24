import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import TopBar from './TopBar';
import { red } from "@mui/material/colors";
import Logo from  '../Logo.png'
import { border } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: red,
    }
});

function ProfilePage() {
    const navigate = useNavigate();

    React.useEffect (() => {
        if(!localStorage.getItem("email")) {
            navigate("/");
        }
    });

    if(!localStorage.getItem("email")) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <TopBar />
            <Avatar alt="Logo" src={Logo} sx={{ width: 200, height: 200, bgcolor: "red", border: 4, margin: 5 }} />
            <Typography variant="h3" margin={5}>
                Mr. Admin Adminstrator
            </Typography>
            <Typography variant="h4" margin={5}>
                admin@admin.iiit.ac.in
            </Typography>
        </ThemeProvider>
    );
}

export default ProfilePage;