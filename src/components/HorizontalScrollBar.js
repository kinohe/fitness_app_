import React from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../assets/images/right-arrow.png";
import LeftArrowIcon from "../assets/images/left-arrow.png";
import { useContext } from "react";
function HorizontalScrollBar({ data, setBodyPart, bodyPart, isBodyParts }) {
  return (
    <Box
      sx={{
        overflowX: "hidden",

        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        sx={{ overflowX: "auto", width: "100%", position: "relative" }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                BodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
}
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
export default HorizontalScrollBar;
