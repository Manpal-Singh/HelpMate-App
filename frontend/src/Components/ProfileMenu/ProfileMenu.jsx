import {
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import CakeIcon from "@mui/icons-material/Cake";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const ProfileMenu = ({
  profileMenuAnchorEl,
  setProfileMenuAnchorEl,
  onLogoutClick,
}) => {
  const { user } = useSelector((state) => state.auth);
  const { firstname, lastname, email, dob, phone } = user;
  const open = Boolean(profileMenuAnchorEl);
  const handleClose = () => {
    setProfileMenuAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={profileMenuAnchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1,
          borderRadius: 2,
          minWidth: 280,
          boxShadow: 3,
        },
      }}
    >
      <MenuItem
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "lightgray",
          m: 1.5,
          borderRadius: 1.5,
        }}
      >
        <Avatar
          alt="User"
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >{`${firstname} ${lastname}`}</Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          {email}
        </Typography>
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <CakeIcon fontSize="small" />
        </ListItemIcon>
        {dayjs(dob).format("llll")}
      </MenuItem>

      <MenuItem onClick={() => alert("Go to settings")}>
        <ListItemIcon>
          <PhoneAndroidIcon fontSize="small" />
        </ListItemIcon>
        {phone}
      </MenuItem>

      <MenuItem onClick={() => alert("Go to settings")}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Update Profile
      </MenuItem>

      <Divider />

      <MenuItem>
        <Button
          className="w-full"
          variant="outlined"
          color="error"
          onClick={() => {
            handleClose();
            onLogoutClick();
          }}
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
