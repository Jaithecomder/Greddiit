import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Login } from '@mui/icons-material';

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
		  	email: data.get('email'),
		  	password: data.get('password'),
		});
		if(data.get('email') === "admin" && data.get('password') === "admin") {
			localStorage.setItem("email", "admin");
			navigate("/profile");
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