import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export const LoginUserForm = () => {
  return (
    <Box display={"flex"} justifyContent={"left"} sx={{ width: "100%" }}>
      <Box display={"flex"} flexDirection={"column"} sx={{ m: 8 }}>
        <Typography variant="h1">Iniciar sesión</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Ingresa los siguientes datos para poder pagar tus cuentas
        </Typography>
        <Box display={"flex"} flexDirection={"column"} mt={4} gap={4}>
          <TextField
            placeholder="Nombre"
            sx={{ width: "65%" }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <TextField
            placeholder="Domicilio"
            sx={{ width: "65%" }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <TextField
            placeholder="Conrtraseña"
            sx={{ width: "65%" }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <Button variant="contained" sx={{ width: "40%" }}>
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
