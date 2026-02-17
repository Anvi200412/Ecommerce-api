import React from "react";
import { Container, Typography, Box, IconButton, Button, TextField, Paper, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../Context/Cartcontext";

const Cartpage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const cart = cartItems;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" mb={4} textAlign="center">Shopping Cart</Typography>

      {cart.length === 0 ? (
        <Typography textAlign="center">Your cart is empty</Typography>
      ) : (
        <Paper elevation={3} sx={{ p: 3 }}>
          {cart.map((item) => (
            <Grid 
              container 
              alignItems="center" 
              justifyContent="space-between" 
              spacing={2} 
              key={item.id} 
              sx={{ mb: 2, py: 1, borderBottom: '1px solid #e0e0e0' }}
            >
              <Grid item xs={5}>
                <Typography>{item.title}</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  sx={{ width: 70 }}
                  inputProps={{ min: 1 }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>₹ {item.price * item.quantity}</Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          {/* Total and Checkout */}
          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Total: ₹ {total.toFixed(2)}</Typography>
            <Button variant="contained" color="primary">Checkout</Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default Cartpage;
