import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { theme } from "@/theme";

export const CreateUserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    domicilio: "",
    telefono: "",
    correo: "",
    contrasena: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display={"flex"} justifyContent={"left"} sx={{ width: "100%" }}>
        <Box display={"flex"} flexDirection={"column"} sx={{ m: 8 }}>
          <Typography variant="h1">Registro de usuario</Typography>
          <Typography variant="h2" sx={{ mt: 2 }}>
            Ingresa los siguientes datos para poder pagar tus cuentas
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={5} mt={4}>
            <TextField
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#5DCDFF",
                },
              }}
            />
            <TextField
              name="domicilio"
              placeholder="Domicilio"
              value={formData.domicilio}
              onChange={handleChange}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#5DCDFF",
                },
              }}
            />
            <Box display={"flex"} sx={{ width: "100%", gap: 2 }}>
              <TextField
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                sx={{ width: "40%" }}
                InputProps={{
                  style: {
                    color: "white",
                    backgroundColor: "#5DCDFF",
                  },
                }}
              />
              <TextField
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                sx={{ width: "60%" }}
                InputProps={{
                  style: {
                    color: "white",
                    backgroundColor: "#5DCDFF",
                  },
                }}
              />
            </Box>
            <TextField
              name="contrasena"
              type="password"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#5DCDFF",
                },
              }}
            />
            <Box
              display={"flex"}
              sx={{
                // borderRadius: "5px",
                bgcolor: theme.palette.primary.main,
                opacity: 0.99,
                mt: 2,
              }}
              bgcolor={"purple"}
              width={"40%"}
            >
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Crear cuenta
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
