import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { PersonAdd } from '@mui/icons-material';

const SignUpForm = ({tabSwitch}) => {
	const [firstName, setFname] = React.useState("");
	const [lastName, setLname] = React.useState("");
	const [userName, setUname] = React.useState("");
	const [age, setAge] = React.useState(0);
	const [phoneNo, setPno] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = {};

		for(let [key, value] of formData.entries()) {
			data[key] = value;
		}

		const signupResponse = await fetch("/api/auth/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
    	});

		const userCreated = await signupResponse.json();
		console.log(userCreated);
		if(userCreated) {
			tabSwitch(0);
		}
	};

	const handleFname = (event) => {
		setFname(event.target.value);
	};

	const handleLname = (event) => {
		setLname(event.target.value);
	};

	const handleUname = (event) => {
		setUname(event.target.value);
	};

	const handleAge = (event) => {
		setAge(event.target.value);
	};

	const handlePno = (event) => {
		setPno(event.target.value);
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
					<PersonAdd />
				</Avatar>
			</Grid>
			<Grid xs={6}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="firstName"
					label="First Name"
					name="firstName"
					onChange={handleFname}
					value={firstName}
				/>
			</Grid>
			<Grid xs={6}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="lastName"
					label="Last Name"
					name="lastName"
					onChange={handleLname}
					value={lastName}
				/>
			</Grid>
			<Grid xs={12}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="userName"
					label="User Name"
					name="userName"
					onChange={handleUname}
					value={userName}
				/>
			</Grid>
			<Grid xs={6}>
				<TextField
					variant="outlined"
					margin="normal"
					type="number"
					fullWidth
					required
					id="age"
					label="Age"
					name="age"
					onChange={handleAge}
					value={age}
				/>
			</Grid>
			<Grid xs={6}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="phoneNo"
					label="Phone Number"
					name="phoneNo"
					onChange={handlePno}
					value={phoneNo}
				/>
			</Grid>
			<Grid xs={12}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
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
					fullWidth
					required
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
					required
					variant="contained"
					color="primary"
					disabled= {!(firstName && lastName && userName && age && phoneNo && email && password)}
				>
					Sign Up
				</Button>
			</Grid>
		</Grid>
	)
}

export default SignUpForm;
