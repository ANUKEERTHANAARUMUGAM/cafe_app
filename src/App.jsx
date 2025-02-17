import { useEffect, useState } from "react";
import Input from "./components/Inputs/InputField";
import { Grid2 as Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Visibility from '@mui/icons-material/Visibility';


function App() {
  const [value, setValue] = useState("");
  const [error, setIsError] = useState("");
  const handleSubmitFunc = (e) => {
    e.preventDefault();
    if (!value) {
      setIsError("required");
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3, xxl: 3 }}>
        <Input
          id={"value"}
          name={"value"}
          value={value}
          required={false}
          placeholder="Enter name"
          handleOnChange={(e) => setValue(e.target.value)}
          handleOnblur={(e) => console.log(e.target.id)}
          error={error}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3, xxl: 3 }}>
        <Input
          id={"value"}
          name={"value"}
          type={"number"}
          value={value}
          placeholder="Enter age"
          required
          handleOnChange={(e) => setValue(e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3, xxl: 3 }}>
        <Input
          id={"password"}
          name={"password"}
          value={value}
          placeholder="Enter Password"
          endIcon={<Visibility/>}
          handleOnChange={(e) => setValue(e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3, xxl: 3 }}>
        <Input
          id={"value"}
          name={"value"}
          value={value}
          placeholder="Enter address"
          handleOnChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3, xxl: 3 }}>
        <Button
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={(e) => {
            handleSubmitFunc(e);
          }}
        >
          Contained
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
