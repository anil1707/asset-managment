import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import History from "./History";
import EditForm from "./EditForm";

const Edit = () => {
  return (
    <Box marginTop={"7.3vh"} sx={{ width: "97vw" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "50px 0 20px 0",
          color: "white",
        }}
      >
        <Typography
          flexGrow={1}
          margin={"0 0 3.5vh 1.5vw"}
          variant="h4"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Edit Asset
        </Typography>
        <Paper
          sx={{
            width: "97vw",
            maxHeight: "74vh",
            margin: "1vh 0 0 1.5vw",
            position: "relative",
            borderRadius: "10px",
            overflowY: 'auto'
          }}
        >
          <Box
            sx={{
              padding: "10px 30px 10px 30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "77%" }}>
              <EditForm />
            </Box>
            <History />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Edit;
