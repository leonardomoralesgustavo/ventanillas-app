import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Form } from "react-hook-form";
import { theme } from "@/theme";

export default function CreateUserForm() {
  return (
    <Box display={"flex"} justifyContent={"left"} sx={{ width: "100%" }}>
      <Box display={"flex"} flexDirection={"column"} sx={{ m: 8 }}>
        <Typography variant="h1">Registro de usuario</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Ingresa los siguientes datos para poder pagar tus cuentas
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={5} mt={4}>
          <TextField />
          <TextField />
          <Box display={"flex"} sx={{ width: "100%", gap: 2 }}>
            <TextField sx={{ width: "40%" }} />
            <TextField sx={{ width: "60%" }} />
          </Box>
          <TextField />
          <Box
            sx={(theme) => ({
              bgcolor: theme.palette.primary.main,
            })}
          >
            <Button variant="contained">Crear cuenta</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
