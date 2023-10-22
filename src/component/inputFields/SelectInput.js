import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectInput = (props) => {
  let { list } = props;
  const [selectedValue, setSelectedValue] = useState("option 1"); // Set the default value here

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // console.log(selectedValue);

  return (
    <Select
      size="small"
      sx={{
        width: "12.5vw",
        height: "2.2vw",
        padding: "3px",
        outline: "none",
      }}
      value={selectedValue}
      onChange={handleChange}
    >
      {props.list.map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SelectInput;
