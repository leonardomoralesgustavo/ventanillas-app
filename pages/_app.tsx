import { MainLayout } from "@/components/Layout";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout title={""} pageDescription={""}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
