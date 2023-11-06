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
    img: "/images/car.png",
    title: "Licencias de Funcionamiento",
    text: "Pagar servicio",
  },
  {
    img: "/images/thunder.png",
    title: "Licencias de Funcionamiento",
    text: "Pagar servicio",
  },
];

export const HomeDigitalServices = () => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      mt={30}
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
