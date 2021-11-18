const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    const { body } = req;
    //console.log(body);
    try {
    const queriedUser = await User.findOne({ email: body.email });
    if (queriedUser) {
        res.status(400).json({ error: "Email already exist" });
    return;
    }
    } 
    catch (err) {
    res.status(400).json(err);
}
console.log(req.body)
    User.create(req.body)
    .then(user => {
      console.log(user);
        res.json({ msg: "success!", user: user });
    })
    .catch(err => res.status(400).json(err));
};

const login = async (req, res) => {
    const { body } = req;
    let userQuery;
    try {
    userQuery = await User.findOne({ email: body.email });
    } 
    catch (err) {
    res.status(400).json(err);
  }

  if (userQuery === null) {
    res.status(400).json({ err: "Email not found" });
    return;
  }

  const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);
  if (!passwordCheck) {
    res.status(400).json({ error: "Email and password do not match" });
    return;
  }

  const userToken = jwt.sign({ id: userQuery._id }, process.env.SECRET_KEY);
  console.log("token:", userToken); 

  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 9999999),
    })
    .json({ message: "success", id: userQuery._id});
};

const logout = (req, res) => {
  res.clearCookie("usertoken");
  res.json({ message: "logout successful" });
};

module.exports = {
  register,
  login,
  logout,
};
