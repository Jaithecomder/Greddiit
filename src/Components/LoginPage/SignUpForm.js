import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { PersonAdd } from '@mui/icons-material';

function SignUpForm() {
	const [fname, setFname] = React.useState("");
	const [lname, setLname] = React.useState("");
	const [uname, setUname] = React.useState("");
	const [age, setAge] = React.useState(0);
	const [pno, setPno] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

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
		<Grid container>
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
					requiredEmail
					id="fname"
					label="First Name"
					name="fname"
					onChange={handleFname}
					value={fname}
				/>
			</Grid>
			<Grid xs={6}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="lname"
					label="Last Name"
					name="lname"
					onChange={handleLname}
					value={lname}
				/>
			</Grid>
			<Grid xs={12}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					required
					id="uname"
					label="User Name"
					name="uname"
					onChange={handleUname}
					value={uname}
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
					id="pno"
					label="Phone Number"
					name="pno"
					onChange={handlePno}
					value={pno}
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
					disabled= {!(fname && lname && uname && age && pno && email && password)}
				>
					Sign Up
				</Button>
			</Grid>
		</Grid>
	)
}

export default SignUpForm;