import { Typography } from "@mui/material";

export const H1: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h1" {...props}>
      {children}
    </Typography>
  );
};

export const H2: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h2" {...props}>
      {children}
    </Typography>
  );
};

export const H3: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h3" {...props}>
      {children}
    </Typography>
  );
};

export const H4: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {children}
    </Typography>
  );
};

export const H5: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h5" {...props}>
      {children}
    </Typography>
  );
};

export const H6: React.FC<any> = ({ children, ...props }) => {
  return (
    <Typography variant="h6" {...props}>
      {children}
    </Typography>
  );
};
