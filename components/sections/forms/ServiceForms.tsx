import {
  Box,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { blue } from "@mui/material/colors";

const DataPage = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 8,
              p: 10,
            }}
          >
            <img src="/images/logo_black.png" alt="logo" className="w-40" />

            <MenuIcon sx={{ ml: "88%", color: "black" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              fontSize={34}
              fontWeight={"semi-bold"}
              textAlign={"center"}
              color={"#000000"}
            >
              {" "}
              Capturar datos del servicio
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Divider
              sx={{
                border: "0.1px light",
                borderBlockColor: "#000000",
                width: "50%",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: "#0000001A",
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControl sx={{ gap: 8, ml: 12 }}>
              <Box display={"display"} flexDirection={"column"} width={"100%"}>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  width={"100%"}
                  gap={3}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    gap={3}
                  >
                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Clave del producto y/o servicio{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>

                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Importe{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                        inputProps={{
                          sx: {
                            "&::placeholder": { color: "gray", fontSize: 16 },
                          },
                        }}
                        placeholder="$"
                      />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    gap={3}
                  >
                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      No. Identificación{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>

                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Descuento{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                        inputProps={{
                          sx: {
                            "&::placeholder": { color: "gray", fontSize: 16 },
                          },
                        }}
                        placeholder="$"
                      />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    gap={3}
                  >
                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Cantidad{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>

                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      No. de pedimiento{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    gap={3}
                  >
                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Clave de unidad
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>

                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      No. de cuenta predial{" "}
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"100%"}
                    gap={3}
                  >
                    <Typography
                      color={"#111827"}
                      textAlign={"left"}
                      fontSize={16}
                    >
                      Unidad
                    </Typography>
                    <Box>
                      <TextField
                        sx={{
                          width: "75%",
                          borderRadius: 2,
                          backgroundColor: "#0000000F",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                height={""}
                gap={2}
              >
                <Typography color={"#111827"} textAlign={"left"} fontSize={16}>
                  Descripción
                </Typography>
                {/* <Box display={"flex"} width={"100%"} height={"300px"}> */}
                <TextField
                  sx={{
                    width: "95%",
                    borderRadius: 2,
                    backgroundColor: "#0000000F",
                  }}
                  inputProps={{
                    style: {
                      height: "150px",
                    },
                  }}
                />
                {/* </Box> */}
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DataPage;
