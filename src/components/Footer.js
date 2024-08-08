import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logo/Logo-1.png";
function Footer() {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Henok
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
