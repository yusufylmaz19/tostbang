import { TextField } from "@mui/material";

export const CustomTextField: React.FC<any> = (props) => {
  return <TextField label="Standard" variant="standard" {...props} />;
};
