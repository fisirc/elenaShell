import React from 'react';
import { Container, Title, Button, Text, BackgroundImage } from '@mantine/core';

export const Landing = () => {

  const titleWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    marginRight: '-8%' 
  };

  const logoStyle = {
    // marginRight: '10px',
  };

  return (
    <BackgroundImage src="/src/assets/img/landing_bg.jpeg" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>
      <Container style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',

        padding: '50px',
        borderRadius: '10px',
        color: 'white',
      }}>
        <div style={titleWrapperStyle}>
          <Title order={1} style={{ fontSize: '5rem', fontFamily: 'Archivo Black, sans-serif', lineHeight: 0.86, textAlign: 'right'}}>POCKET<br></br>CHARITY</Title>
          <img src="/src/assets/logos/pocket_png_logo.png" alt="Logo" style={logoStyle} width="230" height="230" />
        </div>
        <Text size="lg" style={{ marginBottom: '30px', fontFamily: 'Garet', fontWeight: 800, fontSize: '1.2rem'}}>Únete a la cadena de donadores cambiando el mundo</Text>
        <Button size="lg" radius="md" color="red" style={{ fontFamily: 'Garet' }}>INICIAR SESIÓN</Button>
      </Container>
    </BackgroundImage>
  );
};

