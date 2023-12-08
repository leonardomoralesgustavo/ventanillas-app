import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Box, IconButton, SxProps } from "@mui/material";
import { Footer, TopBar } from "../UI";
import { useRouter } from "next/router";
// import Footer from "../UI/Footer";

interface Props {
  title: string;
  pageDescription: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  title,
  pageDescription,
  children,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      {/* <Box component={"header"}>
        <Box component={"nav"}>
          <TopBar />
        </Box>
      </Box> */}
      <Box
        sx={{
          // backgroundImage: { xs: "none", md: "url(/images/Grupo78.png)" },
          bgcolor: { xs: "#37ADF7", lg: "none" },
          // width: { xs: "none", md: "100vw" },
          // height: { xs: "none", md: "100vh" },
          // height: "100vh",
          height:
            router.pathname === "/" || router.pathname === "/login"
              ? "100vh"
              : null,
        }}
        component={"main"}
      >
        <Box component={"header"}>
          <Box component={"nav"}>
            <TopBar />
          </Box>
        </Box>
        {children}
      </Box>
      <Box component={"footer"}>
        <Footer />
      </Box>
    </>
  );
};
