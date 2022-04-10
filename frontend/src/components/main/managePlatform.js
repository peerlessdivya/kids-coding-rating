import { ExpandMore } from '@mui/icons-material';
import { Accordion } from '@mui/material';
import React, { useState } from 'react'
import app_config from '../../config';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Grid } from '@mui/material';
import { useEffect } from 'react';

const ManagePlatform = () => {
  
    const [platforms, setPlatforms] = useState([]);
    const [loading, setLoading] = useState(false)

    const url = app_config.api_url;

    const fetchPlatformData = () => {
        fetch(url+'/platform/getall')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPlatforms(data);
            setLoading(false);
        })
    }

    const displayPlatforms = () => {
        if (!loading)
        return platforms.map(({name, icon, description}) => (
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
                <Grid item md={4}>

                </Grid>
                <Grid item md={8}>
                    {description}
                </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
        ))
    }

    useEffect(() => {
      fetchPlatformData()
    }, [])
  
    return (
    <div>
        {displayPlatforms()}
    </div>
  )
}

export default ManagePlatform