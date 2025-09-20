import React from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const BookingModal = ({ open, handleClose, selectedItem }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: "15px",
        }}
      >
        {selectedItem && (
          <>
            <Typography variant="h6" component="h2" gutterBottom>
              Book {selectedItem.firstName} {selectedItem.lastName}
            </Typography>

            <form className="space-y-4 gap-3 flex flex-col">
              <TextField
                label="Your Name"
                variant="outlined"
                className=""
                fullWidth
                required
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                label="Additional Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
              />

              <div className="flex justify-end gap-2 pt-2">
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #7e22ce, #db2777)",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </form>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BookingModal;
