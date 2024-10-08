import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from "../assets/logo/Logo.png";
function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "42px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
