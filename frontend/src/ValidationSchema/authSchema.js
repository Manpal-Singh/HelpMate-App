import * as yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";
import dayjs from "dayjs";

export const signupValidationSchema = yup.object({
  firstname: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastname: yup
    .string("Enter your last name")
    .required("Last name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid", "Invalid phone number", (value) => {
      return value ? isValidPhoneNumber(value) : false;
    }),
  dob: yup
    .mixed()
    .required("Date of birth is required")
    .test("is-valid-date", "Invalid date", (value) => {
      return dayjs(value).isValid();
    }),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
