import { MainLayout } from "@/components/Layout";
import { usePathInfo } from "@/hooks";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [title, description, pathname] = usePathInfo();
  return (
    <ThemeProvider theme={theme}>
      <MainLayout title={title} pageDescription={description}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
