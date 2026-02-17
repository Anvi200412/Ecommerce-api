
import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from "../../Context/Cartcontext";

const Content = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    fetch('https://fakestoreapi.com/products?limit=12')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  
  const ProductCard = ({ product, addToCart }) => (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 1,
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        },
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 180,
            objectFit: 'contain',
            mb: 1,
            width: '100%',
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h6"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ${product.price}
          </Typography>
        </CardContent>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#427636ff',
          width: '100%',
          borderRadius: '10px',
          mt: 1,
        }}
        onClick={() => addToCart(product)} 
      >
        Add to Cart
      </Button>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: '#fbfbfb' }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bolder"
        sx={{ mt: 9, mb: 4 }}
      >
        Products
      </Typography>

      <Box
        maxWidth="lg"
        mx="auto"
        mt={5}
        px={2}
        sx={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden', overflowY: 'hidden' }}
      >
        <Box
          display="grid"
          gap={3}
          sx={{
            width: '100%',
            maxWidth: '100%',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            rowGap: 20,
            paddingBottom: '20px'
          }}
        >
          {products.map((product, index) => (
            <Box
              key={product.id}
              height="100%"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProductCard
                product={product}
                addToCart={addToCart} 
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
