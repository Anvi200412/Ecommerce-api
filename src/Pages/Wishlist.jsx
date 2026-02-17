import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Wishlist = ({ wishlist }) => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1,fontWeight:"900" }}
      >
        My Wishlist
        <FavoriteIcon sx={{ color: "red",fontWeight:"900" }} />
      </Typography>

      {wishlist.length === 0 ? (
        <Typography variant="h6" align="center">No items in wishlist.</Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {wishlist.map((product) => (
            <Grid
              item
              xs={12}   
              sm={6}   
              md={6}    
              lg={6}    
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }} 
            >
              <Card sx={{ width: "300px", maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body2">{product.title}</Typography>
                  <Typography variant="h6">₹ {product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Wishlist;
