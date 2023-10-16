import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const Detail = () => {
  return (
    <Box
      sx={{
        marginTop: "7.3vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "95vw", height: "92.7vh" }}>
        <Typography
          variant={"h4"}
          sx={{ fontWeight: "bold", margin: "30px 0 30px 0" }}
        >
          Details
        </Typography>
        <Paper
          sx={{
            width: "95vw",
            height: "75vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Tooltip title="Edit">
            <IconButton
              sx={{ position: "absolute", top: "1rem", right: "1rem" }}
            >
              <EditIcon sx={{ fontWeight: "bold", fontSize: "35px" }} />
            </IconButton>
          </Tooltip>
          <Box
            sx={{
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flext-start",
              marginLeft: "5rem",
            }}
          >
            <Box
              sx={{
                width: "95rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  Asset Category
                </Typography>
                <Typography sx={{ color: "#737272" }}>Mobile Asset</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  Asset Type
                </Typography>
                <Typography sx={{ color: "#737272" }}>Laptop</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  Serial No.
                </Typography>
                <Typography sx={{ color: "#737272" }}>01234</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  Model No.
                </Typography>
                <Typography sx={{ color: "#737272" }}>123456</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  SKU
                </Typography>
                <Typography sx={{ color: "#737272" }}>Z12345678</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>
                  Color
                </Typography>
                <Typography sx={{ color: "#737272" }}>Black</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "95rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Asset ID</Typography>
                <Typography sx={{ color: "#737272" }}>12345</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Brand</Typography>
                <Typography sx={{ color: "#737272" }}>Dell</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Manufacture Year</Typography>
                <Typography sx={{ color: "#737272" }}>2021</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Manufacture Date</Typography>
                <Typography sx={{ color: "#737272" }}>20 March 2022</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Puschase Date</Typography>
                <Typography sx={{ color: "#737272" }}>20 March 2023</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Price</Typography>
                <Typography sx={{ color: "#737272" }}>53000</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "95rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Warranty Start</Typography>
                <Typography sx={{ color: "#737272" }}>12 June 2023</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Warranty End</Typography>
                <Typography sx={{ color: "#737272" }}>20 May 2024</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Vender Name</Typography>
                <Typography sx={{ color: "#737272" }}>ABC Infotech</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Vender ID</Typography>
                <Typography sx={{ color: "#737272" }}>012345</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Vender Location</Typography>
                <Typography sx={{ color: "#737272" }}>Pune</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Ram</Typography>
                <Typography sx={{ color: "#737272" }}>16GB</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "95rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Hard Disk</Typography>
                <Typography sx={{ color: "#737272" }}>500 GB</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Processer</Typography>
                <Typography sx={{ color: "#737272" }}>Intel i5</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>OS</Typography>
                <Typography sx={{ color: "#737272" }}>Windows 11</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Screen Size</Typography>
                <Typography sx={{ color: "#737272" }}>16 Inch</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Status</Typography>
                <Typography sx={{ color: "#737272" }}>Allocated</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Allocated To</Typography>
                <Typography sx={{ color: "#737272" }}>Akrisht</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "43rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Allocation Date</Typography>
                <Typography sx={{ color: "#737272" }}>10 Oct 2023</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Service Ticker</Typography>
                <Typography sx={{ color: "#737272" }}>Ser #12345678 i5</Typography>
              </Box>
              <Box sx={{ width: "10rem" }}>
                <Typography variant="h6" fontWeight={"500"}>Last Update</Typography>
                <Typography sx={{ color: "#737272" }}>10 Oct 2023</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={"500"}>Description</Typography>
              <Typography sx={{ color: "#737272" }}>Dell Inspiron is a Windows 10 laptop</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Detail;
