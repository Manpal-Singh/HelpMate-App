import {
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileMenu = ({
  profileMenuAnchorEl,
  setProfileMenuAnchorEl,
  onLogoutClick,
}) => {
  const open = Boolean(profileMenuAnchorEl);
  const handleClose = () => {
    setProfileMenuAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={profileMenuAnchorEl}
      open={open}
      onClose={handleClose}
      // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      // transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1,
          borderRadius: 2,
          minWidth: 280,
          boxShadow: 3,
        },
      }}
    >
      <MenuItem disabled>
        <ListItemIcon>
          <Person fontSize="small" />
        </ListItemIcon>
        <Typography variant="body2">John Doe</Typography>
      </MenuItem>

      <Divider />

      <MenuItem onClick={() => alert("Go to settings")}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Update Profile
      </MenuItem>

      <MenuItem>
        <Button
          className="w-full"
          variant="outlined"
          color="error"
          onClick={onLogoutClick}
          startIcon={<LogoutIcon />}
          sx={{
            borderWidth: "1.5px",
            borderColor: "error.main",
          }}
        >
          Logout
        </Button>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
