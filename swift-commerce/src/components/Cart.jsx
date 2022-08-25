import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";

const Cart = () => {

  return (
    <Card sx={{ display: "flex", marginTop: 2, border: "1px solid red" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1, gap: 3 }}>
          <Button variant="contained" color="success"><AddIcon/></Button>
          <Button variant="contained" color="error"><RemoveIcon/></Button>
        </Box>
      </Box>
      <Box sx={{display: 'flex', marginTop: 2}}>
        <Typography variant="h5">1</Typography>
      </Box>
    </Card>

  );
};

export default Cart;
