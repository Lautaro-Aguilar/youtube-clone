import { Stack } from "@mui/material";
import React from "react";

const Sidebar = () => (
  <Stack
    direction='row'
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  ></Stack>
);

export default Sidebar;
