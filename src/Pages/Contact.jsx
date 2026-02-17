import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e1e1e, #3a3a3a)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
     
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#ffffffcc',
          padding: 5,
          borderRadius: 3,
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(5px)',
          border: '1px solid #ddd',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: '#222', fontWeight: 'bold', mb: 4 }}
        >
          Contact Us
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            label="Message"
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            variant="outlined"
          />
          <Button
            type="submit"
            sx={{
              background: 'linear-gradient(90deg, #000000, #555555)',
              color: '#fff',
              fontWeight: 'bold',
              paddingY: 1.5,
              '&:hover': {
                background: 'linear-gradient(90deg, #555555, #000000)',
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
