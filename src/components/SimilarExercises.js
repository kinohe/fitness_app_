import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "10px", position: "relative", mb: "10px" }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that use the same equipments
      </Typography>
      <Stack direction="row" sx={{ p: "10px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
