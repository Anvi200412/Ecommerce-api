
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, TextField, Drawer, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/Cartcontext";
import { useAuth } from "../Context/AuthContext"; 

export default function Navbar({ wishlistCount }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems } = useCart();
  const { isAuth, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();         
    navigate("/login"); 
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "black", px: "0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
              MyStore
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search products"
              sx={{ bgcolor: "white", borderRadius: 1, width: 300 }}
            />
            <Button component={Link} to="/" sx={{ color: "white" }}>Home</Button>
            <Button component={Link} to="/product" sx={{ color: "white" }}>Product</Button>
            <Button component={Link} to="/category" sx={{ color: "white" }}>Category</Button>
            <Button component={Link} to="/contact" sx={{ color: "white" }}>Contact</Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
           
            {isAuth ? (
              <Button
                sx={{ color: "black", backgroundColor: "white", display: { xs: "none", sm: "block" } }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{ color: "black", backgroundColor: "white", display: { xs: "none", sm: "block" } }}
              >
                Login
              </Button>
            )}

            <IconButton sx={{ color: "white" }} component={Link} to="/wishlist">
              <Badge badgeContent={wishlistCount} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>

            <IconButton sx={{ color: "white" }} component={Link} to="/cart">
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "black", color: "white" } }}
      >
        <Box sx={{ width: 250, p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          <TextField size="small" placeholder="Search products" sx={{ bgcolor: "white", borderRadius: 1 }} />
          <Button component={Link} to="/" onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>Home</Button>
          <Button component={Link} to="/product" onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>Product</Button>
          <Button component={Link} to="/category" onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>Category</Button>
          <Button component={Link} to="/contact" onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>Contact</Button>

          {/* Drawer Login/Logout */}
          {isAuth ? (
            <Button onClick={() => { handleLogout(); setDrawerOpen(false); }} sx={{ color: "white" }}>
              Logout
            </Button>
          ) : (
            <Button component={Link} to="/login" onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
              Login
            </Button>
          )}

          <Button
            component={Link}
            to="/wishlist"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}
          >
            <FavoriteBorderIcon /> Wishlist
          </Button>

          <Button
            component={Link}
            to="/cart"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}
          >
            <ShoppingCartIcon /> Cart ({cartItems.length})
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

// admin-1234

