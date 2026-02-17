import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Divider,
    IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#0f0f0f", color: "#bdbdbd", mt: 8, pt: 6, pb: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                    {/* Brand Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
                            MyStore
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.7 }}>
                            Discover quality products, great deals, and a seamless shopping  <br />experience designed just for you.
                            Our mission is to provide top- <br />notch  customer service, fast shipping, and exclusive offers.

                        </Typography>

                    </Grid>

                    {/* Quick Links */}
                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>Quick Links</Typography>
                        {["Home", "Products", "Categories", "Contact"].map((text) => (
                            <Typography key={text} variant="body2" sx={{ mb: 0.5 }}>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#bdbdbd",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            color: "#fff", transform: "translateX(4px)",
                                            textDecoration: "underline",
                                        }, cursor: "pointer",
                                        display: "inline-block",
                                    }} >
                                    {text}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Contact + Social */}
                    <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>Contact Us</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="body2">support@mystore.com</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="body2">+1 234 567 890</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 1 }}>123 Shopping Street, City, Country</Typography>

                        {/* Social Icons next to contact info */}
                        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                            <IconButton sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" } }} aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" } }} aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" } }} aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Divider & Bottom Line */}
            <Divider sx={{ my: 3, borderColor: "#2c2c2c" }} />
            <Typography variant="body2" align="center" sx={{ color: "#888" }}>
                © {new Date().getFullYear()} MyStore. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
