import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const { items } = cart;

  return (
    <>
      {items.map((item) => {
        return (
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt={item.name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.price}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default Cart;
