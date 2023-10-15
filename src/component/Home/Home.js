import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";
import EditIcon from "@mui/icons-material/Edit";
import LayersIcon from "@mui/icons-material/Layers";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "./TableComponent";

function createData(
  assetType,
  brand,
  assetId,
  price,
  description,
  status,
  allocatedTo,
  allocationDate,
  serviceTicket,
  lastUpdate,
  varintyEnd,
  location
) {
  return {
    assetType,
    brand,
    assetId,
    price,
    description,
    status,
    allocatedTo,
    allocationDate,
    serviceTicket,
    lastUpdate,
    varintyEnd,
    location,
  };
}

const rows = [
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Allocated",
    "Anil Yadav",
    "30 Sep 2023",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Allocated",
    "Akrisht Yadav",
    "30 Sep 2023",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Allocated",
    "Sharib Saifi",
    "30 Sep 2023",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Deallocated",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Inactive",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Allocated",
    "Anil Yadav",
    "30 Sep 2023",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Defactive",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Available for allocation",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Available for allocation",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
  createData(
    "Laptop",
    "Dell",
    "#01234",
    "Rs 53.900",
    "Dell Inspiron is a Windows 10 laptop",
    "Available for allocation",
    "NA",
    "NA",
    "SER#12345678",
    "30 Sep 2023",
    "1 Jan 2024",
    "Pune"
  ),
];

const Home = () => {
  const [isOnInventry, setIsOnInventry] = useState(false);
  const [isOnAllocateAssete, setIsOnAllocateAssete] = useState(false);
  const [isOnDeallocate, setIsOnDeallocate] = useState(false);
  const [selectTab, setSelectTab] = useState("")

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // return focus to the button when we transitioned from !open -> open

  const clickOnInventy = () => {
    setIsOnInventry(true);
    setIsOnAllocateAssete(false);
    setIsOnDeallocate(false);
    setSelectTab("inventry")
  };
  const clickOnAllocateAsset = () => {
    setIsOnAllocateAssete(true);
    setIsOnInventry(false);
    setIsOnDeallocate(false);
    setSelectTab("allocateAsset")
  };
  const clickOnDeallocate = () => {
    setIsOnDeallocate(true);
    setIsOnInventry(false);
    setIsOnAllocateAssete(false);
    setSelectTab("deallocate")
  };
  const clickOnAddAsset = () => {
    setIsOnDeallocate(false);
    setIsOnInventry(false);
    setIsOnAllocateAssete(false);
    setSelectTab("");
  };
  return (
    <Box sx={{ marginTop: "7.3vh" }}>
      <Box sx={{ display: "flex", padding: "50px 0 20px 0", color: "white" }}>
        <Typography
          flexGrow={1}
          ml={"1.5vw"}
          variant="h3"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Allocate Asset
        </Typography>
        <Box
          sx={{
            marginRight: "1.5vw",
            display: "flex",
            width: "45vw",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={
              !isOnInventry
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "green",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    cursor: "pointer",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "green",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    borderBottom: "8px solid green",
                  }
            }
            onClick={clickOnInventy}
          >
            <LayersIcon />
            <Typography sx={{ fontWeight: "bold" }}>Inventry</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#1c1c1b",
              borderRadius: "8px",
              width: "10vw",
              height: "8vh",
            }}
            onClick={clickOnAddAsset}
          >
            <AddIcon />
            <Typography sx={{ fontWeight: "bold" }}>Add asset</Typography>
          </Box>
          <Box
            sx={
              !isOnAllocateAssete
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fa8288",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    cursor: "pointer",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fa8288",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    borderBottom: "8px solid #fa8288",
                  }
            }
            onClick={clickOnAllocateAsset}
          >
            <EastIcon />
            <Typography sx={{ fontWeight: "bold" }}>Allocate asset</Typography>
          </Box>
          <Box
            sx={
              !isOnDeallocate
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "red",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    cursor: "pointer",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                    borderRadius: "8px",
                    width: "10vw",
                    height: "8vh",
                    borderBottom: "8px solid red",
                  }
            }
            onClick={clickOnDeallocate}
          >
            <EditIcon />
            <Typography sx={{ fontWeight: "bold" }}>
              Deallocate asset
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "37vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "1.5vw",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "8vw",
            height: "5vh",
            background: "white",
            textAlign: "center",
            lineHeight: "5vh",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Mobile Assets
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "8vw",
            height: "5vh",
            background: "white",
            textAlign: "center",
            lineHeight: "5vh",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Fixed Assets
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "8vw",
            height: "5vh",
            background: "white",
            textAlign: "center",
            lineHeight: "5vh",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Licenses
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "8vw",
            height: "5vh",
            background: "white",
            textAlign: "center",
            lineHeight: "5vh",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Cloud Accounts
        </Paper>
      </Box>
      <Box>
        <Paper
          elevation={3}
          sx={{
            width: "97vw",
            maxHeight: "65vh",
            margin: "1vh 0 0 1.5vw",
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: "1.5vw",
              py: "2vh",
            }}
          >
            <Typography fontWeight={"bold"}>Mobile Assets</Typography>
            <Box
              sx={{
                width: "14vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid #969799",
                  display: "flex",
                  alignItems: "center",
                  px: ".5vw",
                  height: "3.5vh",
                  borderRadius: "6px",
                }}
              >
                <input
                  style={{ border: "none", outline: "none" }}
                  placeholder="Search"
                ></input>
                <SearchIcon sx={{ color: "#969799" }} />
              </Box>
              <FilterListIcon sx={{ color: "#969799" }} />
            </Box>
          </Box>
          <TableComponent rows={rows} selectedTab = {selectTab} />
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
