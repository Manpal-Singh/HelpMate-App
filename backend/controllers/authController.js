const bcrypt = require("bcryptjs");
const User = require("../models/userRegister");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstname, lastname, dob, phone, email, password, confirmPassword } =
    req.body;

  // Validation
  if (
    !firstname ||
    !lastname ||
    !dob ||
    !phone ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = new User({
    firstname,
    lastname,
    dob,
    phone,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ msg: "User registered successfully", userId: savedUser._id });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password." });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstname,
        lastName: user.lastname,
        phone: user.phone,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
