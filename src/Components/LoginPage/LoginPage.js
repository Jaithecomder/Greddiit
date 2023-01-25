import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUpForm from  './SignUpForm';
import TopBar from './TopBar';
import { red } from "@mui/material/colors";

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
					<Typography>{children}</Typography>
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

function LoginPage() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const navigate = useNavigate();
	
  	React.useEffect (() => {
		if(localStorage.getItem("email") === "admin") {
			navigate("/profile");
		}
  	});

	if(localStorage.getItem("email") === "admin") {
		return (
			<div>
				Loading...
			</div>
		);
	}
	else {
		return (
			<ThemeProvider theme={theme}>
				<TopBar />
				<Container component="main" maxWidth="sm">
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							variant="fullWidth"
							centered
						>
							<Tab label="Login" {...tabinit(0)} />
							<Tab label="Sign Up" {...tabinit(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<LoginForm />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<SignUpForm />
					</TabPanel>
				</Container>
			</ThemeProvider>
		);
	}
}

export default LoginPage;