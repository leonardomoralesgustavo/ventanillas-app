import { theme } from "@/theme";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const LoginUserForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // alert(`Nombre: ${name}\nContraseña: ${password}`);
    router.push("/filesUpload");
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
            sx={{ width: { xs: "100%", sm: "100%", md: "75%" } }}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#5DCDFF",
              },
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            placeholder="Contraseña"
            sx={{ width: { xs: "100%", sm: "100%", md: "75%" } }}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#5DCDFF",
              },
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            display={"flex"}
            sx={{
              // borderRadius: "5px",
              width: { xs: "100%", sm: "100%", md: "45%" },
              bgcolor: theme.palette.primary.main,
              opacity: 0.99,
              mt: 2,
            }}
            bgcolor={"purple"}
            // width={"40%"}
          >
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
