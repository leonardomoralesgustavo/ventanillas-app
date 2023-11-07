// import { useAppDispatch, useAppSelector, useNoFirstTimeEffect } from "@/hooks";
// import { BaseResponse } from "@/interfaces";
// import { getUserClientService } from "@/services";
// // import { getUserSessionService } from "@/services";
// import { setAuthUser } from "@/store";
// import { deleteCookie, getCookie } from "cookies-next";
// import { useRouter } from "next/router";
// import React, { FC, useEffect } from "react";
// import { PropsWithChildren } from "react";

// export const AuthHoc: FC<PropsWithChildren> = ({ children }) => {
//   //REDUX
//   const { isLogged } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();

//   //NAVEGACIÓN
//   const router = useRouter();
//   const { pathname } = router;

//   //EFECTOS
//   //efecto que se ejecuta la primera vez y trae la sesion del usuario si hay token
//   useEffect(() => {
//     const getSession = async () => {
//       const data = await getUserClientService();
//       if (!data.success || !data.data) {
//         deleteCookie("@auth-token");
//         // if (pathname != "/login") {
//         //   router.replace("/login");
//         // }
//       }
//       if (data.success)
//         dispatch(
//           setAuthUser({
//             isLogged: true,
//             name: `${data.data?.user.name} ${data.data?.user.last_name}`,
//             token: getCookie("@auth-token") as string,
//           })
//         );
//     };
//     const token = getCookie("@auth-token");
//     if (token) {
//       getSession();
//     } else {
//       // if (pathname != "/login") {
//       //   router.replace("/login");
//       // }
//     }
//   }, []);
//   //efecto que solo se ejecuta con la lista de dependencias y no la primera vez, revisa que haya sesión siempre
//   useNoFirstTimeEffect(() => {
//     if (!isLogged) {
//       if (pathname != "/login") {
//         // router.replace("/login");
//       }
//     }
//     if (isLogged) {
//       if (pathname == "/login") {
//         router.replace("/");
//       }
//     }
//   }, [isLogged, pathname]);
//   return <>{children}</>;
// };
