import { Drawer } from "@mui/material";
import React, { useState } from "react";

const Cart = () => {
  const [ open, setOpen] = useState();

  return (
    <Drawer
      // anchor={anchor}
      open={open}
      onClose={()=> setOpen(false)}
    >
      [Array]
    </Drawer>
  );
};

export default Cart;
