import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { loginValidationSchema } from "../../ValidationSchema/authSchema";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          toast.error(`User Login Failed: ${data.msg || data.error}`);
          return;
        }

        dispatch(loginUser(data));
        toast.success("Login successful 🎉");
        navigate("/");
      } catch (error) {
        toast.error(`User Login Failed: ${error.message}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          LOGIN TO YOUR ACCOUNT
        </h2>

        <form onSubmit={formik.handleSubmit}>
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

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className="w-full py-2 text-white font-bold rounded-md shadow-md bg-gradient-to-r from-green-400 to-blue-400 hover:opacity-90 transition"
          >
            LOGIN
          </Button>
        </form>

        <p className="mt-6 text-sm">
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-300">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
