import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import TopBar from './TopBar';
import { red } from "@mui/material/colors";
import Logo from  '../Logo.png'

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
					<Typography component="span">{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function tabinit(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
}

const theme = createTheme({
    palette: {
        primary: red,
    }
});

function ProfilePage() {
    const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <TopBar />
            <Avatar alt="Logo" src={Logo} sx={{ width: 200, height: 200, bgcolor: "red", border: 4, margin: 5 }} />
            <Typography variant="h3" margin={5}>
                Mr. Admin Adminstrator
            </Typography>
            <Typography variant="h4" margin={5}>
                ok.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    centered
                >
                    <Tab label="Followers" {...tabinit(0)} />
                    <Tab label="Following" {...tabinit(1)} />
                    <Tab label="Account Info" {...tabinit(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Logo" src={Logo} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Pyrole3003"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Logo" src={Logo} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary="thebigdino"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Logo" src={Logo} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary="devilraveled"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Logo" src={Logo} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary="b89v"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Logo" src={Logo} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary="thiccnas"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="fname"
                            label="First Name"
                            name="fname"
                            defaultValue="Admin"
                            disabled
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="lname"
                            label="Last Name"
                            name="lname"
                            defaultValue="Adminstrator"
                            disabled
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="uname"
                            label="User Name"
                            name="uname"
                            defaultValue="Mr. Admin Adminstrator"
                            disabled
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            defaultValue="admin@admin.iiit.ac.in"
                            disabled
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="age"
                            label="Age"
                            name="age"
                            defaultValue={69}
                            disabled
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="pno"
                            label="Phone Number"
                            name="pno"
                            defaultValue="+91-9876543210"
                            disabled
                        />
                    </Grid>
                </Grid>
            </TabPanel>
        </ThemeProvider>
    );
}

export default ProfilePage;