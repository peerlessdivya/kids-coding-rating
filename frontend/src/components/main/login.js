/*import { Button, Card, CardContent } from "@mui/material";
import { Formik } from "formik";

import GoogleIcon from "@mui/icons-material/Google";



import app_config from "../../config";
import "./signup.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const url = app_config.api_url;

  const navigate = useNavigate();
  
  const loginForm = {
    emailAddress: "",
    password: "",
  };

  const LoginSubmit = (formdata) => {
    console.log(formdata);

    

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggdin successfully!",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate('/user/dashboard');
      });
  };



  

  return (
    <div className="login-bg">

           

      <div className="col-md-3 mx-auto">
        <Card className="mt-5">
          <CardContent>
            <h1 className="text-center"> Login</h1>
            <hr />
            <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Email</label>
                  <input
                    placeholder="email"
                    className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="primary"
                  >
                    Login 
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>

    
  );
};

export default Login;*/

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
             backgroundImage: "url(https://www.google.com/search?q=kids+images+with+computer&rlz=1C1CHBF_enIN983IN983&sxsrf=APq-WBuMcgxym9kO1aBqZJn7vkFhSfXN1A:1650081171723&tbm=isch&source=iu&ictx=1&vet=1&fir=hfMkDEtXXgi1oM%252CVKyVRh82G9PEDM%252C_%253BjWAyLZa6d9ZfIM%252C6DCKQcFYLleMfM%252C_%253BWjisUbqiAtlPEM%252C-U8VKP5rJNY32M%252C_%253B8FwAGTYVHJTbxM%252COeWvVDee8fxR0M%252C_%253Bw6bkKZWB4KFTrM%252CZyTM46oHes56DM%252C_%253B7jn7BW1RpJXd-M%252CUZubM6AaU0I48M%252C_%253BOA72Pe4FFCE1FM%252CDs9IZgWuP559mM%252C_%253BAzQPRVPxS5oVGM%252CUZubM6AaU0I48M%252C_%253Bb2MWwPp3xJhGTM%252C-U8VKP5rJNY32M%252C_%253BiTpQKHwsZHjARM%252C1RDo5_ZMDKfGHM%252C_%253BE4ewaOJVyouKMM%252C6DCKQcFYLleMfM%252C_%253BC5h0XjHHcd8-3M%252CAZDmD0txAmqvhM%252C_%253BdijY0D0to80xGM%252CYoyUJXHyxY1D1M%252C_&usg=AI4_-kR6JUlIUTNgA3NGXtbRChTOUyJzGg&sa=X&ved=2ahUKEwj5gd2w15f3AhXVR2wGHbJOAMgQ9QF6BAgDEAE#imgrc=hfMkDEtXXgi1oM)",

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
              Login
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
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/main/signup"  >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
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