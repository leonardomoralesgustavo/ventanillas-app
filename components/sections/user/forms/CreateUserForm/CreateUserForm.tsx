import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function CreateUserForm() {
  return (
    <Box
      display={"flex"}
      justifyContent={"left"}
      sx={{ width: "100%", bgcolor: "purple" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ bgcolor: "orange", m: 8 }}
      >
        <Typography variant="h1">Registro de usuario</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Ingresa los siguientes datos para poder pagar tus cuentas
        </Typography>
      </Box>
    </Box>
  );
}
