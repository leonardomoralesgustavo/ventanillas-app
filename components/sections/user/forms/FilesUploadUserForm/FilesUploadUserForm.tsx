import { theme } from "@/theme";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const FilesUpload = () => {
  const router = useRouter();
  const handleFileInputChange = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };

  return (
    <Box display={"flex"} justifyContent={"left"} sx={{ width: "100%" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ m: 8, gap: 4 }}
        py={8}
      >
        <Typography variant="h1">Sube tus documentos</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Ingresa los siguientes datos para poder pagar tus cuentas
        </Typography>
        <Divider sx={{ bgcolor: "white", width: "55%" }} />
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", sm: "center", md: "left" }}
          sx={{ flexWrap: "wrap" }}
          gap={10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            mr={{ xs: "none", sm: "none", md: 20 }}
          >
            <Box>
              <Typography>INE</Typography>
              <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>ACTA DE NACIMIENTO</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>CURP</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>RFC</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            <Box>
              <Typography>COMPROBANTE DE DOMICILIO</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>LICENCIA DE CONDUCIR</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>RECIBO DE AGUA</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
            <Box>
              <Typography>OTRO</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={" "}
              >
                <TextField
                  placeholder="Nombre"
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#5DCDFF",
                    },
                  }}
                />
                <label style={{ width: "auto" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <Box
                    display={"flex"}
                    sx={{
                      margin: "0 0 0 -10px",
                      borderRadius: "12px",
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.99,
                    }}
                    width={"120%"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "55px",
                        borderRadius: "12px",
                      }}
                      component="span"
                    >
                      Seleccionar archivo
                    </Button>
                  </Box>
                </label>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{
            margin: "0 0 0 -10px",
            borderRadius: "5px",
            bgcolor: theme.palette.primary.main,
            opacity: 0.99,
            ml: "0.5px",
          }}
          bgcolor={"purple"}
          width={"40%"}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "55px",
              borderRadius: "5px",
            }}
            onClick={() => router.push("/digitalServices")}
          >
            Siguiente
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
