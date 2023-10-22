import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SelectInput from "../inputFields/SelectInput";
import InputComponent from "../inputFields/InputComponent";

const EditForm = () => {
  const list = ["option 1", "option 2", "option 3", "option 4"];
  let typoStyle = {
    fontWeight:"bold",
    marginBottom:"8px"
  }
  const [value, setValue] = useState({
    serialNo : "",
    modelNo :"",
    sku:"",
    colour:"",
    assetId:"",
    manufactoringYear:"",
    manufactoringDate:"",
    purchaseDate:"",
    venderId:"",
    vederLocation:"",
    processer:"",
    screenSize:"",
    description:""
  })

  console.log('setValue', value);
  
  return (
    <Box marginTop={"4vh"} marginBottom={"3vh"}>
      <Box
        sx={{
          width: "49.5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
        }}
      >
        <Box>
          <Typography sx={typoStyle}>Status</Typography>
          <SelectInput list={list} />
        </Box>
        <Box>
          <Typography sx={typoStyle}>Asset Category</Typography>
          <SelectInput list={list} />
        </Box>
        <Box>
          <Typography sx={typoStyle}>Asset Type</Typography>
          <SelectInput list={list} />
        </Box>
      </Box>
      <Divider sx={{ margin: "3vh 0 2vh 0" }} />
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Common Attributes
        </Typography>
        <Box>
          <Box
            sx={{
              width: "68vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={typoStyle}>Serial No</Typography>
              <InputComponent name="serialNo" formData = {value} value={value.serialNo} setValueFunc={setValue} />
            </Box>
            <Box>
              <Typography sx={typoStyle}>Model No</Typography>
              <InputComponent name="modelNo" formData={value} value={value.modelNo} setValueFunc={setValue}/>
            </Box>
            <Box>
              <Typography sx={typoStyle}>SKU</Typography>
              <InputComponent name="sku" formData={value} value={value.sku} setValueFunc={setValue} />
            </Box>
            <Box>
              <Typography sx={typoStyle}>Colour</Typography>
              <InputComponent name="colour" formData={value} value={value.colour} setValueFunc={setValue} />
            </Box>
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Typography sx={typoStyle}>Asset ID</Typography>
            <InputComponent name="assetId" formData={value} value={value.assetId} setValueFunc={setValue} />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "3vh 0 2vh 0" }} />
      <Box>
        <Typography variant="h6" fontWeight={"bold"} mb={"20px"}>
          Manufactoring Info
        </Typography>
        <Box
          sx={{
            width: "68vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "left",
          }}
        >
          <Box>
            <Typography sx={typoStyle}>Brand</Typography>
            <SelectInput list={list}/>
          </Box>
          <Box>
            <Typography sx={typoStyle}>Manufactoring Year</Typography>
            <InputComponent name="manufactoringYear" formData={value} value={value.manufactoringYear} setValueFunc={setValue} />
          </Box>
          <Box>
            <Typography sx={typoStyle}>Manufactoring Date</Typography>
            <InputComponent name="manufactoringDate" formData={value} value={value.manufactoringDate} setValueFunc={setValue} />
          </Box>
          <Box>
            <Typography sx={typoStyle}>Purchase Date</Typography>
            <InputComponent name="purchaseDate" formData={value} value={value.purchaseDate} setValueFunc={setValue} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "31vw",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Box>
            <Typography sx={typoStyle}>Vender ID</Typography>
            <InputComponent name="venderId" formData={value} value={value.venderId} setValueFunc={setValue} />
          </Box>
          <Box>
            <Typography sx={typoStyle}>Vender Location</Typography>
            <InputComponent name="vederLocation" formData={value} value={value.vederLocation} setValueFunc={setValue} />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "3vh 0 2vh 0" }} />
      <Box>
        
        <Typography variant="h6" fontWeight={"bold"} mb={"20px"}>
          More Attributes
        </Typography>
        <Box
          sx={{
            width: "68vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "left",
          }}
        >
          <Box>
            <Typography sx={typoStyle}>Ram</Typography>
            <SelectInput list={list}/>
          </Box>
          <Box>
            <Typography sx={typoStyle}>Hard Disk</Typography>
            <SelectInput list={list}/>
          </Box>
          <Box>
            <Typography sx={typoStyle}>Processer</Typography>
            <InputComponent name="processer" formData={value} value={value.processer} setValueFunc={setValue}/>
          </Box>
          <Box>
            <Typography sx={typoStyle}>OS</Typography>
            <SelectInput list={list}/>
          </Box>
        </Box>
        <Box marginTop={"2rem"}>
          <Typography sx={typoStyle}>Screen Size</Typography>
          <InputComponent name="screenSize" formData={value} value={value.screenSize} setValueFunc={setValue} />
        </Box>
        <Box marginTop={"2rem"} marginBottom={"3rem"}>
          <Typography sx={typoStyle}>Description</Typography>
          <InputComponent name="description" formData={value} value={value.description} setValueFunc={setValue} multilinefield = {true} styling = {{width:"68vw", minHieght:"2rem"}} placeholder="description here..." />
        </Box>
      </Box>
      <Button variant="contained"  sx={{width:"9rem", height:"3rem", padding:"1rem",fontSize:"1rem", fontWeight:"bold"}}>Save</Button>
    </Box>
  );
};

export default EditForm;
