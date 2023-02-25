import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Login } from '@mui/icons-material';

const initRegister = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	location: "",
	occupation: "",
	picture: "",
  };
  
  const initLogin = {
	email: "",
	password: "",
  };

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = {};

		for(let [key, value] of formData.entries()) {
			data[key] = value;
		}

		const loginResponse = await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
    	});

		if ( loginResponse.ok || loginResponse.status == 304 ){
			const loggedIn = await loginResponse.json();
			console.log(loggedIn);
			
			if(loggedIn) {
				const token = loggedIn.token;
				const user = loggedIn.user;
				localStorage.setItem('isLoggedIn', token);
				localStorage.setItem('user', user);
				navigate("/profile");
			}else{
				navigate("/");
			}
		}
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	return (
		<Grid container component="form" onSubmit={handleSubmit} noValidate>
			<Grid xs={12} display="flex" justifyContent="center" alignItems="center">
				<Avatar sx={{ bgcolor: 'primary.main' }}>
					<Login />
				</Avatar>
			</Grid>
			<Grid xs={12}>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					onChange={handleEmail}
					value={email}
				/>
			</Grid>
			<Grid xs={12}>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					onChange={handlePassword}
					value={password}
				/>
			</Grid>
			<Grid xs={12}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					disabled= {!(email && password)}
				>
					Login
				</Button>
			</Grid>
    </Grid>
	)
}

export default LoginForm;
