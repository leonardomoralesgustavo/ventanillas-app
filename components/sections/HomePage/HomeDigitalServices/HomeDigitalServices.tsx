import { theme } from "@/theme";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface IDataCard {
  img: string;
  title: string;
  text: string;
}

const cards: IDataCard[] = [
  {
    img: "/images/house.png",
    title: "Predial",
    text: "Pagar servicio",
  },
  {
    img: "/images/car.png",
    title: "Tenencia Vehicular",
    text: "Pagar servicio",
  },
  {
    img: "/images/profile.png",
    title: "Licencias de Funcionamiento",
    text: "Pagar servicio",
  },
  {
    img: "/images/exposicion.png",
    title: "Exposiciones",
    text: "Pagar servicio",
  },
  {
    img: "/images/recital.png",
    title: "Recitales",
    text: "Pagar servicio",
  },
  {
    img: "/images/permiso.png",
    title: "Permisos",
    text: "Pagar servicio",
  },
  {
    img: "/images/boxlucha.png",
    title: "Box y Lucha libre",
    text: "Pagar servicio",
  },
  {
    img: "/images/futbol.png",
    title: "Fútbol",
    text: "Pagar servicio",
  },
  {
    img: "/images/feria.png",
    title: "Ferias",
    text: "Pagar servicio",
  },
  {
    img: "/images/desfile.png",
    title: "Desfiles",
    text: "Pagar servicio",
  },
  {
    img: "/images/fiesta.png",
    title: "Fiesta Patronal",
    text: "Pagar servicio",
  },
  {
    img: "/images/disco.png",
    title: "Tardeada, disco",
    text: "Pagar servicio",
  },
  {
    img: "/images/baile.png",
    title: "Bailes públicos",
    text: "Pagar servicio",
  },
  {
    img: "/images/juegomecanico.png",
    title: "Juego mecánicos",
    text: "Pagar servicio",
  },
  {
    img: "/images/concierto.png",
    title: "Conciertos",
    text: "Pagar servicio",
  },
];

export const HomeDigitalServices = () => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ flexWrap: "wrap" }}
      // gap={4}

      // mt={30}
    >
      {cards.map(({ img, title, text }) => (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            sx={{
              bgcolor: "white",
              minWidth: "300px",
              m: 2,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Box component={"img"} src={`${img}`} />
            <Typography sx={{ color: "black" }}>{title}</Typography>
            <Box
              display={"flex"}
              sx={{
                margin: "0 0 0 -10px",
                borderRadius: "5px",
                bgcolor: theme.palette.primary.main,
                opacity: 0.99,
              }}
              bgcolor={"purple"}
              width={"80%"}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "55px",
                  borderRadius: "5px",
                }}
                onClick={() => router.push("/captureData")}
              >
                {text}
              </Button>
            </Box>
          </Box>
        </>
      ))}
    </Box>
  );
};
