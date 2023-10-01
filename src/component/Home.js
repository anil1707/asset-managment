import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";
import EditIcon from "@mui/icons-material/Edit";
import LayersIcon from "@mui/icons-material/Layers";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Home = () => {
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
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "green",
              borderRadius: "8px",
              width: "10vw",
              height: "8vh",
            }}
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
          >
            <AddIcon />
            <Typography sx={{ fontWeight: "bold" }}>Add asset</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#fa8288",
              borderRadius: "8px",
              width: "10vw",
              height: "8vh",
            }}
          >
            <EastIcon />
            <Typography sx={{ fontWeight: "bold" }}>Allocate asset</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "red",
              borderRadius: "8px",
              width: "10vw",
              height: "8vh",
            }}
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
            height: "65vh",
            margin: "1vh 0 0 1.5vw",
            position: "relative",
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
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Asset Type</StyledTableCell>
                  <StyledTableCell align="left">Brand</StyledTableCell>
                  <StyledTableCell align="left">Asset ID</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">status</StyledTableCell>
                  <StyledTableCell align="left">Allocated To</StyledTableCell>
                  <StyledTableCell align="left">
                    Allcoation Date
                  </StyledTableCell>
                  <StyledTableCell align="left">Service Ticket</StyledTableCell>
                  <StyledTableCell align="left">Last Update</StyledTableCell>
                  <StyledTableCell align="left">Varinty End</StyledTableCell>
                  <StyledTableCell align="left">Location</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.assetId}>
                    <StyledTableCell align="left">
                      {row.assetType}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.brand}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.assetId}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.price}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.allocatedTo}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.allocationDate}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.serviceTicket}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.lastUpdate}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.varintyEnd}
                    </StyledTableCell>
                    <StyledTableCell align="left" width={"5.5%"}>
                      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        {row.location} <MoreVertIcon />
                       </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
