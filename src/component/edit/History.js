import React from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Paper, Typography } from "@mui/material";
const History = () => {
  const history = [
    { date: "15 Feb 2023", description: "OS updated from Windows 10 to 11" },
    { date: "05 Feb 2023", description: "Anti Virus Updated" },
    { date: "01 Jan 2023", description: "Allocated to Anil Kumar Yadav" },
    { date: "22 Dec 2022", description: "Ram Updated" },
  ];
  return (
    <Box marginTop={"4vh"}>
      <Paper elevation={3} sx={{ width: "20vw", padding: "10px", backgroundColor:"#ffe0b2" }}>
        <Box sx={{ display: "flex", marginBottom: "24px" }}>
          <CalendarMonthIcon sx={{color:"#fb8c00"}} />
          <Typography sx={{ marginLeft: "20px", color:"#fb8c00" }}>Assset History</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingLeft: "10px" }}
        >
          {history.map((ele) => {
            return (
              <Box>
                <Typography sx={{ color: "#fb8c00", marginBottom: "7px" }}>
                  {ele.date}
                </Typography>
                <Typography>{ele.description}</Typography>
                <hr style={{ color: "GrayText", margin: "15px 0 15px 0" }}></hr>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default History;
