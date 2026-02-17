
import React, { useEffect } from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    useEffect(() => {
        AOS.refresh(); 
    }, []);
    return (
        <Container
            maxWidth="xl"
            disableGutters
            sx={{
                backgroundColor: '#fbfbfb',
                overflow: 'hidden',
                minHeight: {
                    xs: '250px',
                    md: '400px',
                    lg: '500px',
                },
            }}
        >
            <Box
                sx={{
                    minHeight: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Typography
                    variant="h3"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    sx={{
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        willChange: 'transform',
                    }}
                >
                    Welcome to my store
                </Typography>

                <Typography
                    variant="subtitle1"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    sx={{
                        mt: 1,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        color: 'text.secondary',
                        maxWidth: '600px',
                        willChange: 'transform',
                    }}
                >
                    Discover quality products, great deals, and everything you need in one place.
                </Typography>

                <Button
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    sx={{
                        mt: 3,
                        px: 4,
                        py: 1.4,
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#fff',
                        background: 'linear-gradient(135deg, #7d7b80ff, #404142ff)',
                        transition: 'all 0.4s ease',

                        willChange: 'transform',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Start Shopping
                </Button>
            </Box>
        </Container>
    )
}

export default Hero

