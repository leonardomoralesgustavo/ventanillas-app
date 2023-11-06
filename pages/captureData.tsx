import {
  Box,
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { blue } from "@mui/material/colors";
import { theme } from "@/theme";

const DataPage = () => {
  const [formData, setFormData] = useState({
    claveProducto: "",
    importe: "",
    identificacion: "",
    descuento: "",
    cantidad: "",
    noPedimento: "",
    claveUnidad: "",
    cuentaPredial: "",
    unidad: "",
    descripcion: "",
  });

  const handleSaveClick = () => {
    // Muestra los datos en la consola
    console.log("Datos del formulario:", formData);

    // Muestra los datos en un alert
    alert("Datos guardados: " + JSON.stringify(formData));
  };

  const handleInputChange = (field: any, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          // width: "100vw",
          height: "90vh",
          gap: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 4,
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
              // border: "0.1px light",
              borderBlockColor: "#000000",
              width: "50%",
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "#0000001A",
            //   width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            p: 4,
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
                      value={formData.claveProducto}
                      onChange={(e) =>
                        handleInputChange("claveProducto", e.target.value)
                      }
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
                      value={formData.importe}
                      onChange={(e) =>
                        handleInputChange("importe", e.target.value)
                      }
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
                      value={formData.identificacion}
                      onChange={(e) =>
                        handleInputChange("identificacion", e.target.value)
                      }
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
                      value={formData.descuento}
                      onChange={(e) =>
                        handleInputChange("descuento", e.target.value)
                      }
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
                      value={formData.cantidad}
                      onChange={(e) =>
                        handleInputChange("cantidad", e.target.value)
                      }
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
                      value={formData.noPedimento}
                      onChange={(e) =>
                        handleInputChange("noPedimiento", e.target.value)
                      }
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
                      value={formData.claveUnidad}
                      onChange={(e) =>
                        handleInputChange("claveUnidad", e.target.value)
                      }
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
                      value={formData.cuentaPredial}
                      onChange={(e) =>
                        handleInputChange("cuentaPredial", e.target.value)
                      }
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
                      value={formData.unidad}
                      onChange={(e) =>
                        handleInputChange("unidad", e.target.value)
                      }
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
                value={formData.descripcion}
                onChange={(e) =>
                  handleInputChange("descripcion", e.target.value)
                }
              />
              {/* </Box> */}
            </Box>
          </FormControl>
          <Box
            display={"flex"}
            sx={{
              // margin: "0 0 0 -10px",
              borderRadius: "5px",
              bgcolor: theme.palette.primary.main,
              opacity: 0.99,
              ml: 11,
              mt: 4,
            }}
            bgcolor={"purple"}
            width={"15%"}
            // height={"50px"}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              sx={{ width: "100%" }}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DataPage;
