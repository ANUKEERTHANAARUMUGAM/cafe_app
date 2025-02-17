import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const Input = ({
  id,
  name,
  label = null,
  placeholder = "",
  value,
  type = "text",
  handleOnChange,
  required = false,
  disabled = false,
  multiline = false,
  variant = "standard",
  error = false,
  rows = 3,
  maxRows = 5,
  minRows = 1,
  startIcon = null,
  endIcon = null,
  sx = {},
  size = "small",
  handleOnblur,
  helperText = "",
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      sx={sx}
      size={size}
      fullWidth
      placeholder={!label && required ? placeholder + "*" : placeholder}
      type={type}
      onChange={(e) => handleOnChange(e)}
      onBlur={handleOnblur && ((e) => handleOnblur(e))} //calls the delegate function only if the function is passed
      required={required}
      variant={variant}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        },
      }}
      disabled={disabled}
      multiline={multiline}
      rows={multiline && rows}
      minRows={multiline && minRows}
      maxRows={multiline && maxRows}
      value={value}
    />
  );
};

export default Input;
