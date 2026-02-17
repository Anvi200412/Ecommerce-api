// import React, { useState, useEffect } from "react";
// import ProductCard from "../Components/Products/ProductCard";
// import { Grid, Container, Typography, CircularProgress, Box } from "@mui/material";

// const Product = ({ addToWishlist }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "900" }}>
//         All Products
//       </Typography>

//       <Grid container spacing={3} justifyContent="center" mt={4}>
//         {products.map((prod) => (
//           <Grid item xs={12} sm={6} md={3} lg={3} key={prod.id}>
//             <ProductCard
//               product={prod}
//               addToWishlist={addToWishlist}
//               addToCart={(prod) => console.log("Add to cart", prod)}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };
// export default Product;
import React, { useState, useEffect } from "react";
import ProductCard from "../Components/Products/ProductCard";
import { Grid, Container, Typography, CircularProgress, Box } from "@mui/material";
import { useCart } from "../Context/Cartcontext"; // import cart

const Product = ({ addToWishlist }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // get addToCart from context

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "900" }}
      >
        All Products
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={4}>
        {products.map((prod) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={prod.id}>
            <ProductCard
              product={prod}
              addToWishlist={addToWishlist}
              addToCart={addToCart} // pass context function
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;

