

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const url = app_config.api_url;
  const navigate = useNavigate();

  const userForm = {
    email: "",
    password: "",
  };
  const loginSubmit = (formdata) => {
    console.log(formdata);
    fetch(url + "/user/checklogin", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { ContentType: "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Logged in Successfully",
          }).then(() => {
            navigate('/main/BrowsEquipment')
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "error",
            text: "Logged in Failed",
          })
        }
        return res.json()
      })
      .then((data) => {
        console.log(data);
        
      });
  };

 
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
             backgroundImage: "url(http://localhost:5000/images/pic.jpg)",

            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <Formik initialValues={userForm} onSubmit={loginSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    onChange={handleChange}
                    value={values.user}
                    label="User Name"
                    name="user"
                    autoComplete="user"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    autoComplete="current-password"
                  /> 
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name=" confirm "
                    label=" confirm Password"
                    type=" confirm password"
                    id="confirm "
                    onChange={handleChange}
                    value={values.confirm}
                    autoComplete="confirm-password"
                  />
                 
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Signup
                  </Button>
                                   <Copyright sx={{ mt: 5 }} />
                </Box>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}