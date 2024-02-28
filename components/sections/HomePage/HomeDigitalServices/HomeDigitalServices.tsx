import ModalMain from "@/components/modal/ModalMain";
import { theme } from "@/theme";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface IDataCard {
  img: string;
  title: string;
  text: string;
  subServicios: ISubServices[];
}

export interface ISubServices {
  name?: string;
  services?: { name?: string; text: string }[];
}

const cards: IDataCard[] = [
  {
    img: "/images/impuesto.png",
    title: "Impuestos",
    text: "Pagar servicio",
    subServicios: [
      {
        name: "IMPUESTOS SOBRE LOS INGRESOS",
        services: [
          {
            text: "Impuesto a los ingresos obtenidos por establecimientos de enseñanza particular",
          },
          {
            text: "Impuesto sobre juegos permitidos, espectáculos públicos, diversiones y aparatos mecánicos o electromecánicos accionados por monedas o fichas",
          },
        ],
      },
      {
        name: "IMPUESTOS SOBRE EL PATRIMONIO",
        services: [
          { text: "Impuesto predial" },
          {
            text: "Impuesto sobre traslación de dominio y otras operaciones con bienes inmuebles",
          },
        ],
      },
      {
        name: "ACCESORIOS DE IMPUESTOS",
      },
    ],
  },
  {
    img: "/images/derecho.png",
    title: "Derechos",
    text: "Pagar servicio",
    subServicios: [
      {
        name: "DERECHOS POR SERVICIOS PÚBLICOS",
        services: [
          { text: "Derechos por servicio de alumbrado público" },
          { text: "Derechos por servicios de agua potable" },
          { text: "Derechos por servicios de drenaje y alcantarillado" },
          {
            text: "Derechos por uso de rastro, guarda y matanza de ganado, transporte e inspección sanitaria, revisión de fierros para marcar ganado y magueyes",
          },
          { text: "Derechos por servicio y uso de panteones" },
          { text: "Derechos por el servicio de limpia" },
        ],
      },
      {
        name: "DERECHOS POR REGISTRO, LICENCIAS Y PERMISOS DIVERSOS",
        services: [
          { text: "Derechos por registro familiar" },
          {
            text: "Derechos por servicios de certificaciones legalizaciones y expedición de copias certificadas",
          },
          {
            text: "Derechos por servicios de expedición y renovación de placa de funcionamiento de establecimientos comerciales e industriales",
          },
          {
            text: "Derechos por servicio de expedición de placa de bicicletas y vehículos de propulsión no mecánica",
          },
          {
            text: "Derechos por expedición, revalidación y canje de permisos o licencias para funcionamiento de establecimientos que enajenen o expendan bebidas alcohólicas",
          },
          {
            text: "Derechos por expedición y revalidación de licencias o permisos para la colocación y emisión de anuncios publicitarios",
          },
          {
            text: "Derecho por licencia o permiso para la prestación del servicio de estacionamiento y pensiones",
          },
        ],
      },
      {
        name: "DERECHOS EN MATERIA DE DESARROLLO URBANO Y ECOLOGÍA",
        services: [
          { text: "Derechos por alineamiento, deslinde y nomenclatura" },
          {
            text: "Derechos por realización y expedición de avalúos catastrales",
          },
          {
            text: "Derechos por la expedición de constancias y otorgamiento de licencias de uso de suelo, y autorización de fraccionamientos en sus diversas modalidades",
          },
          {
            text: "Derechos por licencias para construcción, reconstrucción, ampliación y demolición",
          },
          {
            text: "Derechos por autorización de peritos en obras para construcción",
          },
          {
            text: "Derechos por autorización para la venta de lotes de terrenos en fraccionamiento",
          },
          {
            text: "Otros derechos por servicios relacionados con el desarrollo urbano",
          },
          {
            text: "Derechos por la participación en concursos, licitaciones y ejecución de obra pública",
          },
          {
            text: "Concurso o licitación",
          },
          {
            text: "Supervisión de obra pública",
          },
          {
            text: "Derechos por expedición de dictamen de impacto ambiental y otros servicios en materia ecológica",
          },
          {
            text: "Derecho especial para obras por cooperación",
          },
        ],
      },
      {
        name: "DERECHO POR SERVICIOS PRESTADOS EN MATERIA DE SEGURIDAD PÚBLICA Y TRÁNSITO",
        services: [
          {
            text: "Derechos por servicios prestados en materia de seguridad pública y tránsito",
          },
        ],
      },
      {
        name: " ACCESORIOS DE DERECHOS",
      },
    ],
  },
  {
    img: "/images/producto.png",
    title: "Productos",
    text: "Pagar servicio",
    subServicios: [
      {
        name: "PRODUCTOS",
        services: [
          {
            text: "Arrendamiento de bienes muebles o inmuebles propiedad del Municipio",
          },
          {
            text: "Uso de plazas y pisos en las calles, pasajes y lugares públicos",
          },
          {
            text: "Locales situados en el interior y exterior de los mercados",
          },
          { text: "Estacionamiento en la vía pública" },
          {
            text: "Arrendamiento de terrenos, montes, pastos y demás bienes del Municipio",
          },
          { text: "Establecimientos y empresas del Municipio" },
          {
            text: "Expedición en copia simple o certificada, o reproducción de la información en dispositivos de almacenamiento, derivado del ejercicio del derecho de acceso a la información",
          },
          { text: "Asistencia Social" },
          {
            text: "Explotación o enajenación de cualquier naturaleza de los bienes propiedad del Municipio",
          },
          {
            text: "Venta de bienes muebles e inmuebles propiedad del Municipio",
          },
          { text: "Los capitales y valores del Municipio y sus rendimientos" },
          { text: "Los bienes de beneficencia" },
        ],
      },
      {
        name: " ACCESORIOS DE LOS PRODUCTOS",
      },
    ],
  },
  {
    img: "/images/aprovechamiento.png",
    title: "Aprovechamientos",
    text: "Pagar servicio",
    subServicios: [
      {
        services: [
          { text: "Intereses moratorios" },
          { text: "Recargos" },
          {
            text: "Multas impuestas a los infractores de los reglamentos administrativos por bando de policía",
          },
          { text: "Multas federales no fiscales" },
          { text: "Tesoros ocultos" },
          { text: "Bienes y herencias vacantes" },
          { text: "Donaciones hechas a favor del Municipio" },
          {
            text: "Cauciones y fianzas, cuya pérdida se declare por resolución firme a favor del Municipio",
          },
          {
            text: "Reintegros, incluidos los derivados de responsabilidad oficial",
          },
          { text: "Intereses" },
          { text: "Indemnización por daños a bienes municipales" },
          { text: "Rezagos" },
        ],
      },
    ],
  },
  {
    img: "/images/participacion.png",
    title: "Participaciones y Aportaciones",
    text: "Pagar servicio",
    subServicios: [
      {
        name: "PARTICIPACIONES",
      },
      {
        name: "APORTACIONES",
        services: [
          {
            text: "Fondo de Aportaciones para la Infraestructura Social Municipal FISM",
          },
          {
            text: "Fondo de Aportaciones para el Fortalecimiento de los Municipios FORTAMUN",
          },
        ],
      },
    ],
  },
  {
    img: "/images/ingresos.png",
    title: "Ingresos Extraordinarios",
    text: "Pagar servicio",
    subServicios: [
      {
        services: [
          {
            text: "Los destinados por el Congreso del Estado para el pago de obras o servicios de urgente atención",
          },
          { text: "Empréstitos, financiamientos y obligaciones" },
          {
            text: "Apoyos financieros del gobierno federal o estatal",
          },
          { text: "Devolución de Impuestos Federales" },
          { text: "Impuestos y derechos extraordinarios" },
          { text: "Las aportaciones para obras de beneficencia social" },
          { text: "Expropiaciones" },
          {
            text: "Otras participaciones extraordinarias",
          },
        ],
      },
    ],
  },
];

export const HomeDigitalServices = () => {
  const router = useRouter();
  const [showMainModal, setShowMainModal] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [dataSubServices, setDataSubServices] = useState<ISubServices[]>();
  const handleOpen = () => setShowMainModal(true);
  const handleClose = () => setShowMainModal(false);

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
      {cards.map(({ img, title, text, subServicios }) => (
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
                // onClick={() => router.push("/captureData")}
                onClick={() => {
                  handleOpen(),
                    setSelectedService(title),
                    setDataSubServices(subServicios);
                  console.log(dataSubServices);
                }}
              >
                {text}
              </Button>
            </Box>
          </Box>
        </>
      ))}
      <ModalMain
        open={showMainModal}
        onClose={handleClose}
        service={selectedService}
        subServices={dataSubServices!}
      />
    </Box>
  );
};
