import { TextField } from "@mui/material";
import React from "react";

const InputComponent = (props) => {
  console.log(props);
  const handleChange = (e) => {
    let fieldName = props.name;
    props.setValueFunc({
      ...props.formData,
      [fieldName] : e.target.value
    })

    console.log("hello for handle change");
  };

  return (
    <div>
      <TextField
        name={props.name}
        size="small"
        value={props.value}
        onChange={handleChange}
        InputProps={props.multilinefield ?{
          multiline: true,
        } :""}
        sx={props.styling ? props.styling :""}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputComponent;
