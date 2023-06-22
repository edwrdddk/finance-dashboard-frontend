import { useState } from "react";
import { Link } from "react-router-dom";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left Side */}
      <FlexBetween gap="0.75rem">
        <InsertChartIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          DDK Finance
        </Typography>
      </FlexBetween>

      {/* Right Side */}
    </FlexBetween>
  );
};

export default Navbar;
