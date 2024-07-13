const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// THIS IS THE SIGN UP LOGIC
const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const securePassword = await bcrypt.hash(password, 10);

    user = new User({ username, email, password: securePassword, accountType });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User registration Success" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "Please SignUp" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credential" });
    }
    const accessToken = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = await jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );
    res.status(200).send({
      success: true,
      message: "login successfully",
      
        _id: user._id,
        author: user.username,
        role: user.accountType,
  
      accessToken,
      refreshToken,
    });
    // const data = {
    //     id: user._id,
    //     accountType: user.accountType,
    //     author: user.username,
    //   };

    //       const accessToken = generateAccessToken(data);
    //       const refreshToken = generateRefressToken(data);

    //       return res.status(200).json({
    //         success: true,
    //         message: "Login successful",
    //         accessToken,
    //         refreshToken,
    //         role: user.accountType,
    //         author: user.username,
    //       });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { login, signup };
