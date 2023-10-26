import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Box, IconButton, SxProps } from "@mui/material";
import { TopBar } from "../UI/TopBar";
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
        style={{
          backgroundImage: "url(/images/Grupo78.png)",
          width: "100vw",
          height: "100vh",
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
      {/* <Box component={"footer"}> */}
      {/* <Footer /> */}
      {/* </Box> */}
    </>
  );
};
