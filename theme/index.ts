import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#155F95",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xl: 1600,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0px",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
        //   style: {
        //     background:
        //       "#155F95",
        //     color: "white",
        //     ":hover": {
        //       opacity: 1,
        //     },
        //   },
          style: (currentStyles) => ({
            fontSize: "16px",
            color: "white",
            textTransform: "none",
            bgColor: "primary",
            ":hover": {
                
            },
            [currentStyles.theme.breakpoints.between("lg", "xl")]: {
              fontSize: "15px",
            },
            [currentStyles.theme.breakpoints.between("md", "lg")]: {
              fontSize: "14px",
            },
          }),
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: ({ theme }) => ({
            fontSize: "30px",
            fontWeight: "medium",
            [theme.breakpoints.between("lg", "xl")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "25px",
            },
            [theme.breakpoints.between("xs", "md")]: {
              fontSize: "22px",
            },
          }),
        },
        {
          props: { variant: "h2" },
          style: ({ theme }) => ({
            fontSize: "16px",
            fontWeight: "lighter",
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "14px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
            },
          }),
        },
        {
          props: { variant: "body1" },
          style({ theme }) {
            return {
              fontSize: "16px",
              fontWeight: "300",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            };
          },
        },
        {
          props: { variant: "body2" },
          style({ theme }) {
            return {
              fontSize: "35px",
              fontWeight: "500",
              [theme.breakpoints.between("lg", "xl")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "23px",
              },
              [theme.breakpoints.between("xs", "md")]: {
                fontSize: "18px",
              },
            };
          },
        },
      ],
    },
  },
});

export { theme };
