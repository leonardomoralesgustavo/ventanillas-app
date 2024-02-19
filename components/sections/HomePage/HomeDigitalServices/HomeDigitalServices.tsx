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
    img: "/images/impuesto.png",
    title: "Impuestos",
    text: "Pagar servicio",
  },
  {
    img: "/images/derecho.png",
    title: "Derechos",
    text: "Pagar servicio",
  },
  {
    img: "/images/producto.png",
    title: "Productos",
    text: "Pagar servicio",
  },
  {
    img: "/images/aprovechamiento.png",
    title: "Aprovechamientos",
    text: "Pagar servicio",
  },
  {
    img: "/images/participacion.png",
    title: "Participaciones y Aportaciones",
    text: "Pagar servicio",
  },
  {
    img: "/images/ingresos.png",
    title: "Ingresos Extraordinarios",
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
      mt={5}
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
              p: 5,
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
