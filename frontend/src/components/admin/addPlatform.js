import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Formik } from "formik";
import { Link } from "react-router-dom";
import app_config from "../../config";
import Swal from "sweetalert2";

const AddPlatform = () => {
  const url =  app_config.api_url;
  const platform = {
    name: "",
    description: "",
    reviews: "",
    avgRating: "",
    icon: "",
  };

  const submitPlatform = (formdata) => {
    console.log(formdata);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/platform/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered successfully!",
        });
      });

  };

  const uploadThumbnail = (e) => {
      const file = e.target.files[0];
      const fd = new FormData();
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
              <form
                
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      value={values.name}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="description"
                      label="description"
                      value={values.description}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="avgRating"
                      label="rating"
                      value={values.avgRating}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="reviews"
                      label="reviews"
                      value={values.reviews}
                      onChange={handleChange}
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
                  Submit
                </Button>
              </form>
            )}
          </Formik>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/main/login" variant="body2">
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
