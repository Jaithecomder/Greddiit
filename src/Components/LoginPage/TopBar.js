import React from "react";
import AppBar from '@mui/material/AppBar';
import Avatar from "@mui/material/Avatar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Logo from  '../Logo.png'

function TopBar() {
    
  return (
		<AppBar position="static">
			<Toolbar>
				<Avatar alt="Logo" src={Logo} sx={{ mr: 2 }} />
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            		Greddiit
				</Typography>
			</Toolbar>
		</AppBar>
  )
}

export default TopBar;