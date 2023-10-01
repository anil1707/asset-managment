import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";

const drawerWidth = 240;
const navItems = ["Report", "Contact"];

function Nav(props) {
  return (
    <Box >
      <CssBaseline />
      <AppBar component="nav" sx={{background:'white'}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block", color:"black" } }}
          >
            Asset Management
          </Typography>
          <Box
            sx={{
              width: "15vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button sx={{ color: "black" }}>Report</Button>
            <Box
              sx={{
                width: "10vw",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid gray",
                margin: "5px",
                borderRadius: "8px",
              }}
            >
              <Avatar
                sx={{ bgcolor: orange }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
                margin="10px"
              />
              <Box sx={{color:"black", padding:"5px"}}>
                <Typography>Anil Yadav</Typography>
                <Typography>IT Admin</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
