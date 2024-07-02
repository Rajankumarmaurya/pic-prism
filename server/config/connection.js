const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connection success");
  } catch (error) {
    console.log("Not connected");
  }
};

module.exports = connectDB;
