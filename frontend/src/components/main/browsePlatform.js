
import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
  import app_config from "../../config";



const BrowsePLatform = () => {
  const url = app_config.api_url;
  const [platformList, setPlatformList] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchPlatformData = () => {
    fetch(url + "/platform/getall"  )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlatformList(data);
        setLoading(false);
      });
  };

  const showPlatform = () => {
    if (!loading) {
      return platformList.map((platform, index) => (
        <Card>
          <Grid container>
          <Grid item md={4}>

            </Grid>
            <Grid item md={8}>
              <p>{platform.name}</p>
              <p>{platform.description}</p>
              <p>{platform.reviews}</p>
              <p>{platform.avgRating}</p>
              <p>{platform.icon}</p>

            </Grid>
          </Grid>
        </Card>
      ));
    } else {
      return <h2>Loading ...</h2>;
    }
  };

  
  useEffect(() => {
    fetchPlatformData();
  }, []);

 

  return (
    
         <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2> <b>Manage Platform User</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Discription</th>
                        <th>Reviews</th>
                        <th>Average Rating</th>
                      
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>      
                </tbody>
            </table>

                       
                        {showPlatform()}
         </div>
      </div>
  );
};

export default BrowsePLatform;