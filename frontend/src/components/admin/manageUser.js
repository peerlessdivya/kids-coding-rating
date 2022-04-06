
import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
  import app_config from "../../config";




const ManageUser = () => {
  const url = app_config.api_url;
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchUserData = () => {
    fetch(url + "/user/getall"  )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setLoading(false);
      });
  };

  const showUser = () => {
    if (!loading) {
      return userList.map((user, index) => (
        <Card>
          <Grid container>
          <Grid item md={4}>

            </Grid>
            <Grid item md={8}>
              <p>{user.name}</p>
              <p>{user.description}</p>
              <p>{user.reviews}</p>
              <p>{user.avgRating}</p>
              <p>{user.icon}</p>

            </Grid>
          </Grid>
        </Card>
      ));
    } else {
      return <h2>Loading ...</h2>;
    }
  };

  
  useEffect(() => {
    fetchUserData();
  }, []);

 

  return (
    <div className="container">
            <h1>Manage User</h1>
      <hr />
      {showUser()}
    </div>
  );
};

export default ManageUser;