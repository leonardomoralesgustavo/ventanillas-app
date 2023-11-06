import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const LoginUserForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Nombre: ${name}\nContraseña: ${password}`);
    router.push("/");
    const userData = {
      name,
      password,
    };
    console.log("Datos de usuario:", userData);
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            placeholder="Contraseña"
            sx={{ width: "65%" }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ width: "40%" }}
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
