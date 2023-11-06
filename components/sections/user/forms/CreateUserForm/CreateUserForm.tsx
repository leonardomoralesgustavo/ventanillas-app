import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Form } from "react-hook-form";
import { theme } from "@/theme";

export const CreateUserForm = () => {
  return (
    <Box display={"flex"} justifyContent={"left"} sx={{ width: "100%" }}>
      <Box display={"flex"} flexDirection={"column"} sx={{ m: 8 }}>
        <Typography variant="h1">Registro de usuario</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Ingresa los siguientes datos para poder pagar tus cuentas
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={5} mt={4}>
          <TextField
            placeholder="Nombre"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <TextField
            placeholder="Domicilio"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <Box display={"flex"} sx={{ width: "100%", gap: 2 }}>
            <TextField
              placeholder="Teléfono"
              sx={{ width: "40%" }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
            />
            <TextField
              placeholder="Coreo"
              sx={{ width: "60%" }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
            />
          </Box>
          <TextField
            placeholder="Contraseña"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          {/* <Box
            sx={(theme) => ({
              bgcolor: theme.palette.primary.main,
            })}
          > */}
          <Button variant="contained" sx={{ width: "30%" }}>
            Crear cuenta
          </Button>
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
