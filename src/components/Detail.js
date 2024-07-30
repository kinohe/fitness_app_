import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/images/body-part.png";
import TargetImage from "../assets/images/target.png";
import EquipmentImage from "../assets/images/equipment.png";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong {name} one of the best exercise to target
          your {target}. It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
