import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signupValidationSchema } from "../../ValidationSchema/authSchema";
import dayjs from "dayjs";

const Signup = () => {
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dob: null,
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formattedValues = {
        ...values,
        dob: values.dob ? dayjs(values.dob).format("DD-MM-YYYY") : "",
      };
      console.log("Submitting form with values:", formattedValues);
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedValues),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle error
          console.error("❌ Registration failed:", data.msg || data.error);
          alert(data.msg || "Registration failed");
          return;
        }

        // Success
        console.log("✅ Registration successful:", data);
        alert("User registered successfully");
        resetForm();
      } catch (err) {
        console.error("❌ Error during signup:", err);
        alert("Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          CREATE AN ACCOUNT
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex gap-3 mb-4">
            <TextField
              className="flex-1"
              size="small"
              id="firstname"
              name="firstname"
              label="First Name"
              placeholder="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="flex-1"
              size="small"
              id="lastname"
              name="lastname"
              label="Last Name"
              placeholder="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="flex gap-3 mb-4">
            <MuiTelInput
              className="flex-1"
              size="small"
              name="phone"
              label="Phone Number"
              placeholder="Phone Number"
              textFieldProps={{
                placeholder: "Enter phone number",
                fullWidth: true,
              }}
              value={formik.values.phone || ""}
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={() => formik.setFieldTouched("phone", true)}
              defaultCountry="IN"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="flex-1"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                slots={{
                  openPickerIcon: () => null, // Hide default icon on right
                }}
                slotProps={{
                  textField: {
                    size: "small",
                    error: formik.touched.dob && Boolean(formik.errors.dob),
                    helperText: formik.touched.dob && formik.errors.dob,
                    InputProps: {
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ cursor: "pointer" }}
                        >
                          <CalendarTodayIcon onClick={() => setOpen(true)} />
                        </InputAdornment>
                      ),
                    },
                  },
                }}
                id="dob"
                name="dob"
                label="Date of Birth"
                value={formik.values.dob}
                onChange={(value) => formik.setFieldValue("dob", value)}
                onBlur={() => formik.setFieldTouched("dob", true)}
              />
            </LocalizationProvider>
          </div>

          <div className="mb-4">
            <TextField
              size="small"
              fullWidth
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <TextField
              size="small"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-4">
            <TextField
              size="small"
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className="w-full py-2 text-white font-bold rounded-md shadow-md bg-gradient-to-r from-green-400 to-blue-400 hover:opacity-90 transition"
          >
            SIGNUP
          </Button>
        </form>

        <p className="mt-6 text-sm">
          Have already an account?{" "}
          <Link to="/login" className="text-blue-300">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
