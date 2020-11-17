import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';

const Placeholder = (props) => {
  return (  
    <>
      <Helmet><title>{}</title></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography variant="overline">
              Page under construction ... 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
 
export default Placeholder;