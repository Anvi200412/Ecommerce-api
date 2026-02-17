
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { Grid, Card, CardMedia, CardContent, Typography, Box, Button, Container, IconButton } from "@mui/material";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const Category = ({ addToWishlist }) => {
// //   const { categoryName } = useParams();
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
// //       .then((res) => res.json())
// //       .then(setProducts)
// //       .catch(console.log);
// //   }, [categoryName]);

// //   const shortTitle = (title, length = 40) =>
// //     title.length > length ? title.slice(0, length) + "..." : title;

// //   useEffect(() => {
// //     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
// //   }, []);

// //   return (
// //     <Container maxWidth="xl" sx={{ py: 4 }}>
// //       <Grid container spacing={3} justifyContent="center" alignItems="stretch">
// //         {products.map((product, index) => (
// //           <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: "flex" }}
// //             data-aos="fade-up"
// //             data-aos-delay={index * 100}>

// //             <Card sx={{
// //               flex: 1,
// //               display: "flex",
// //               flexDirection: "column",
// //               width: "300px",
// //               position: "relative",
// //               "&:hover .wishlist": {
// //                 opacity: 1,
// //                 transform: "translateX(0)",
// //               },
// //             }}>
// //               <Box sx={{
// //                 position: "absolute", zIndex: 2, top: { xs: "8%", sm: "30%" },
// //                 right: { xs: 10, sm: 20 },
// //                 opacity: 0,
// //                 transform: "translateX(20px)",
// //                 transition: "all 0.3s ease",
// //               }}>

// //                 <IconButton
// //                   color="error"
// //                   onClick={() => addToWishlist(product)}
// //                   sx={{
// //                     backgroundColor: "#fff",
// //                   }}
// //                 >
// //                   <FavoriteBorderIcon />
// //                 </IconButton>
// //               </Box>

// //               <CardMedia
// //                 component="img"
// //                 height="180"
// //                 image={product.image}
// //                 alt={product.title}
// //                 sx={{ objectFit: "contain", p: 2 }}
// //               />

// //               <CardContent sx={{ flexGrow: 1 }}>
// //                 <Typography variant="body2" fontWeight={500}>
// //                   {shortTitle(product.title)}
// //                 </Typography>
// //                 <Typography variant="h6" sx={{ mt: 1 }}>
// //                   ₹ {product.price}
// //                 </Typography>
// //               </CardContent>
// //               <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
// //                 <Button variant="contained" color="success">
// //                   Add to Cart
// //                 </Button>
// //               </Box>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default Category;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button,
//   Container,
//   IconButton,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Category = ({ addToWishlist }) => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   // Fetch products from API based on category
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
//       .then((res) => res.json())
//       .then(setProducts)
//       .catch(console.log);
//   }, [categoryName]);

//   // Shorten long titles
//   const shortTitle = (title, length = 40) =>
//     title.length > length ? title.slice(0, length) + "..." : title;

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
//   }, []);

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Grid container spacing={3} justifyContent="center" alignItems="stretch">
//         {products.map((product, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={3}
//             key={product.id}
//             sx={{ display: "flex" }}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <Card
//               sx={{
//                 flex: 1,
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "300px",
//                 position: "relative",
//                 "&:hover .wishlistIcon": {
//                   opacity: 1,
//                   transform: "translateX(0)",
//                 },
//               }}
//             >
//               {/* Wishlist Icon */}
//               <Box
//                 className="wishlistIcon"
//                 sx={{
//                   position: "absolute",
//                   zIndex: 2,
//                   top: { xs: "8%", sm: "30%" },
//                   right: { xs: 10, sm: 20 },
//                   opacity: 0,
//                   transform: "translateX(20px)",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <IconButton
//                   color="error"
//                   onClick={() => addToWishlist(product)}
//                   sx={{ backgroundColor: "#fff" }}
//                 >
//                   <FavoriteBorderIcon />
//                 </IconButton>
//               </Box>

//               {/* Product Image */}
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={product.image}
//                 alt={product.title}
//                 sx={{ objectFit: "contain", p: 2 }}
//               />

//               {/* Product Details */}
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="body2" fontWeight={500}>
//                   {shortTitle(product.title)}
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 1 }}>
//                   ₹ {product.price}
//                 </Typography>
//               </CardContent>

//               {/* Add to Cart Button */}
//               <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
//                 <Button variant="contained" color="success">
//                   Add to Cart
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Category;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ProductCard from "../Components/Products/ProductCard";
import { useCart } from "../Context/Cartcontext";

const Category = ({ addToWishlist }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.log);
  }, [categoryName]);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} addToWishlist={addToWishlist} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Category;



