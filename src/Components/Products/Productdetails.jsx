
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    CircularProgress,
    Stack,
    Rating,
    Paper,
} from "@mui/material";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product)
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="50vh"
            >
                <CircularProgress />
            </Box>
        );

    return (
        <Box p={2} maxWidth="1000px" margin="0 auto">

            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                flexWrap="wrap"
                gap={4}
                alignItems="flex-start"
                justifyContent="center"
            >

                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        flex: { xs: "1 1 100%", sm: "1 1 40%" },
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{
                            width: "50%",
                            maxWidth: 400,
                            maxHeight: 400,
                            objectFit: "contain",
                        }}
                    />
                </Paper>


                <Box
                    flex={{ xs: "1 1 100%", sm: "1 1 55%" }}
                >
                    <Stack spacing={2}>
                        <Typography variant="h4">{product.title}</Typography>

                        <Typography variant="body1">{product.description}</Typography>


                        {product.rating && (
                            <Box display="flex" alignItems="center">
                                <Rating
                                    value={product.rating.rate}
                                    precision={0.5}
                                    readOnly
                                />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    ({product.rating.count} reviews)
                                </Typography>
                            </Box>
                        )}


                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={3}
                            alignItems="center"
                            justifyContent="flex-start"
                        >
                            <Typography variant="h5" color="primary">
                                ₹ {product.price}
                            </Typography>


                            <Link to="/product" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#1976d2",
                                        color: "#f9f6f6ff",
                                        '&:hover': {
                                            backgroundColor: "#1565c0",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    Back to Products
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductDetails;
