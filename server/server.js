const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//new
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
//new
app.use(cors(corsOptions)); // Use this after the variable declaration

require("dotenv").config();
require("./config/mongoose.config");
app.use(cookieParser());

// changed
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/messages.routes")(app);

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

app.listen(8000, () => console.log("express is running on", 8000));
