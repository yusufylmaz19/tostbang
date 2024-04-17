import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import FlexRow from "../flex/flexRow";
import { Button, MenuItem, Popover } from "@mui/material";
import { FcBusinessman } from "react-icons/fc";
import Avatar from "../avatar";
import { H6 } from "../typography";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { siwtchTheme } from "@/src/slices/themeSlice";

interface Props {
  handleDrawerToggle: () => void;
  drawerWidth: number;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleLogout: () => void;
  username?: string | null;
}

export default function Navbar({
  handleDrawerToggle,
  drawerWidth,
  handleClick,
  handleClose,
  handleLogout,
  id,
  open,
  anchorEl,
  username,
}: Props) {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleSwitchTheme = () => {
    dispatch(siwtchTheme(!theme));
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: 11,
          boxShadow: "none",
          backgroundImage: "none",
          backdropFilter: "blur(12px)",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "flex-end" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "primary.main", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <FlexRow>
            <IconButton onClick={handleSwitchTheme}>
              <DarkModeSharpIcon />
            </IconButton>
            <Button
              endIcon={
                <Avatar>
                  <FcBusinessman />
                </Avatar>
              }
              aria-describedby={id}
              onClick={handleClick}
              sx={{
                display: { sm: "flex" },
                gap: "10px",
                textTransform: "none",
                paddingInline: "16px",
                borderRadius: "8px",
                backgroundColor: "rgba(25, 118, 210, 0.04) ",
                ":hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1) ",
                },
              }}
            >
              <H6>{username}</H6>
            </Button>
            <Popover
              sx={{
                "& .MuiPopover-paper": {
                  width: 120,
                  backgroundColor: "transparent",
                  backdropFilter: "blur(12px)",
                },
              }}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Popover>
          </FlexRow>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
