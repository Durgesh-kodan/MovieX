import { Typography, useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Movi<span style={{ color: theme.palette.primary.main }}>X</span>
    </Typography>
  );
};

export default Logo;
