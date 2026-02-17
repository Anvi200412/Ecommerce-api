import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardMedia,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import electronicsImg from "../../assets/electronics.jpg";
import jawelleryImg from "../../assets/jawellery.jpg";
import ladisImg from "../../assets/ladis.jpg";
import menImg from "../../assets/men.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const categoryImages = {
  electronics: electronicsImg,
  jewelery: jawelleryImg,
  "men's clothing": menImg,
  "women's clothing": ladisImg,
};

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 900, mb: 4 }}
      >
        All Categories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat) => (
          <Grid item key={cat} size={{ xs: 12, sm: 6 }}>
            <Card
            data-aos="fade-up"
              sx={{
                height: "100%",
                transition: "0.3s",
                
              }}
            >
              <CardActionArea onClick={() => navigate(`/category/${cat}`)}>
                <CardMedia
                  component="img"
                  image={categoryImages[cat]}
                  alt={cat}
                  sx={{
                    height: 220,
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.1)", 
                    },
                  }}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" mb={2}>
                    {cat}
                  </Typography>

                  <Button variant="contained" sx={{backgroundColor:"green"}}>
                    View Products
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;



