import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight={700} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective workouts
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        mb={4}
        sx={{ backgroundColor: "#ff2625", padding: "12px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="212px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
