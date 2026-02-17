import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // ProtectedRoute mathi aavto page
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box sx={{ p: 4, bgcolor: "white", width: 300, boxShadow: 3 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
