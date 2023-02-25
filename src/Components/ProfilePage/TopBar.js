import React from "react";
import AppBar from '@mui/material/AppBar';
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

import Logo from  '../Logo.png'

function TopBar() {
	const navigate = useNavigate();
    const Logout = (event) => {
		console.log( localStorage.getItem('isLoggedIn') );
		navigate("/");
	}

  	return (
		<AppBar position="static">
			<Toolbar>
				<Avatar alt="Logo" src={Logo} sx={{ mr: 2 }} />
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            		Greddiit
				</Typography>
				<Button onClick={Logout} color="inherit" startIcon={<LogoutIcon />}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
  )
}

export default TopBar