import { Avatar, Box, Button, Container,  CssBaseline, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Formik } from "formik";
import { Link } from "react-router-dom";

const AddPlatform = () => {
  
  
  
  const platform = {
    name: "",
    description: "",
    reviews: "",
    avgRating: "",
    icon: "",
  };

  

 const submitPlatform = (formdata) => {
   console.log(formdata);
   
 }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            AddPlatform
          </Typography>
          
            <Formik initialValues={platform} onSubmit={submitPlatform}>
              {({ values, handleChange, handleSubmit }) => (
               <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3 }}
             >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange}
    
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="reviews"
                        label="reviews"
                        autoFocus
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    platform
                  </Button>
                </Box>
              )}
            </Formik>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        
        
      </Container>
    </div>
  );
};

export default AddPlatform;
