import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        backgroundColor: "black",
        borderRadius: "50%",
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "green",
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const ProgressComponent = ({ movie }) => {
  const rating = movie?.vote_average * 10;
  return (
    <div className=" mt-8 flex items-center space-x-3">
      <CircularProgressWithLabel
        color={`${rating > 70 ? "success" : "secondary"}`}
        value={rating ? rating : 0}
      />
      <p className=" text-2xl font-semibold text-white">User Score</p>
    </div>
  );
};

export default ProgressComponent;
