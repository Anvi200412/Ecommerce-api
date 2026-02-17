
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   IconButton,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function ProductCard({ product, addToWishlist, addToCart }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//       once: true,
//       delay: 100,
//     });
//   }, []);

//   if (!product) return null;

//   return (
//     <Card
//       data-aos="flip-left"
//       sx={{
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         p: 1,
//         width: {
//           xs: "100%",
//           sm: 260,
//           md: 300,
//         },
//         height: {
//           xs: "auto",
//           sm: 380,
//           md: 400,
//         },
//         overflow: "hidden",
//         cursor: "pointer",
//         transition: "all 0.3s ease",
//         "&:hover": {
//           transform: "translateY(-8px)",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//         },
//         "&:hover .wishlist": {
//           transform: "translateX(0)",
//           opacity: 1,
//         },
//         "&:hover .product-image": {
//           transform: "scale(1.08)",
//         },
//       }}
//     >
//       {/* Wishlist Icon */}
//       <Box
//         className="wishlist"
//         sx={{
//           position: "absolute",
//           top: { xs: "8%", sm: "30%" },
//           right: { xs: 10, sm: 20 },
//           transform: "translateX(60px)",
//           opacity: 0,
//           transition: "all 0.3s ease",
//           zIndex: 2,
//         }}
//       >
//         <IconButton
//           color="error"
//           sx={{
//             backgroundColor: "#fff",
//             boxShadow: 2,
//             "&:hover": { backgroundColor: "#ffe6e6" },
//           }}
//           onClick={() => addToWishlist(product)}
//         >
//           <FavoriteBorderIcon />
//         </IconButton>
//       </Box>

//       {/* Product Image */}
//       <CardMedia
//         component="img"
//         image={product.image}
//         alt={product.title}
//         className="product-image"
//         sx={{
//           height: {
//             xs: 140,
//             sm: 160,
//             md: 180,
//           },
//           objectFit: "contain",
//           mb: 1,
//           width: "100%",
//           transition: "transform 0.4s ease",
//         }}
//       />

//       {/* Product Details */}
//       <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: { xs: "0.95rem", sm: "1rem" },
//             height: 70,
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}
//         >
//           {product.title}
//         </Typography>

//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
//         >
//           ₹ {product.price}
//         </Typography>
//       </CardContent>

//       {/* Buttons */}
//       <Box
//         display="flex"
//         flexDirection={{ xs: "column", sm: "row" }}
//         justifyContent="center"
//         gap={1}
//         mb={2}
//         px={1}
//       >
//         <Button
//           component={Link}
//           to={`/product/${product.id}`}
//           variant="outlined"
//           size="small"
//           fullWidth
//         >
//           View Details
//         </Button>

//         <Button
//           variant="contained"
//           size="small"
//           startIcon={<ShoppingCartIcon />}
//           color="success"
//           fullWidth
//           onClick={() => addToCart(product)}
//         >
//           Add
//         </Button>
//       </Box>
//     </Card>
//   );
// }

// export default ProductCard;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductCard({ product, addToWishlist, addToCart }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      delay: 100,
    });
  }, []);

  if (!product) return null;

  return (
    <Card
      data-aos="flip-left"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1,
        width: { xs: "100%", sm: 260, md: 300 },
        height: { xs: "auto", sm: 380, md: 400 },
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        },
        "&:hover .wishlist": {
          transform: "translateX(0)",
          opacity: 1,
        },
        "&:hover .product-image": {
          transform: "scale(1.08)",
        },
      }}
    >
      {/* Wishlist Icon */}
      <Box
        className="wishlist"
        sx={{
          position: "absolute",
          top: { xs: "8%", sm: "30%" },
          right: { xs: 10, sm: 20 },
          transform: "translateX(60px)",
          opacity: 0,
          transition: "all 0.3s ease",
          zIndex: 2,
        }}
      >
        <IconButton
          color="error"
          sx={{
            backgroundColor: "#fff",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#ffe6e6" },
          }}
          onClick={() => addToWishlist(product)}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        className="product-image"
        sx={{
          height: { xs: 140, sm: 160, md: 180 },
          objectFit: "contain",
          mb: 1,
          width: "100%",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Product Details */}
      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem" },
            height: 70,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          ₹ {product.price}
        </Typography>
      </CardContent>

      {/* Buttons */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap={1}
        mb={2}
        px={1}
      >
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="outlined"
          size="small"
          fullWidth
        >
          View Details
        </Button>

        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartIcon />}
          color="success"
          fullWidth
          onClick={() => addToCart(product)} 
        >
          Add
        </Button>
      </Box>
    </Card>
  );
}

export default ProductCard;

