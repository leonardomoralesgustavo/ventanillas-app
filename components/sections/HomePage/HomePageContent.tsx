import { Box, Typography } from "@mui/material";
import React from "react";
import { HomeDigitalServices } from "./HomeDigitalServices";
import { LoginUserForm } from "../user/forms/LoginUserForm";
import { CreateUserForm } from "../user/forms";

export const HomePageContent = () => {
  return (
    <Box>
      {/* <HomeDigitalServices /> */}
      {/* <LoginUserForm /> */}
      <CreateUserForm />
    </Box>
  );
};
