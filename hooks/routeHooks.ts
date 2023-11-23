import { useRouter } from "next/router";

interface PageMetaData {
  title: string;
  description: string;
}

export const usePathInfo = () => {
  const router = useRouter();
  const { pathname } = router;

  const getPageMetadata = (): PageMetaData => {
    switch (pathname) {
      case "/":
        return {
          title: "Rifame - Inicio",
          description: "Rifame",
        };
      default:
        return { title: "", description: "" };
    }
  };

  const { title, description } = getPageMetadata();

  return [title, description, pathname] as const;
};
