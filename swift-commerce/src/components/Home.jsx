import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import Products from './Products'

const Home = () => {
  return (
    <Box>
      <Box sx={{ maxWidth: "100%", margin: "0 auto", display: "flex", justifyContent: 'center' }}>
        <Box
        sx={{
            backgroundImage: "url(https://cdn.pixabay.com/photo/2013/10/29/18/20/flower-202483__340.jpg)",
            width: "90%",
            height: 350,
            display: 'flex',
            gap: 3,
            alignItems: 'center'
        }}
        >
          <Typography variant="h4">Best seller</Typography>
          <Carousel/>
        </Box>
    </Box>
      <Products/>
    </Box>
  );
};

export default Home;
