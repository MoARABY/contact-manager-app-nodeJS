const asyncHndler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc register
//@route POST /api/users/register
//@access public
const userRegister = asyncHndler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("please fill all fileds");
  }
  const FindUser = await userModel.findOne({ email });
  if (FindUser) {
    res.status(400);
    throw new Error("User Already Registerd");
  }

  const passHash = await bcrypt.hash(password, 10);
  // res.json({ hashed: passHash });
  const userRegister = await userModel.create({
    userName,
    email,
    password: passHash,
  });
  if (userRegister) {
    res.status(201).json({
      _id: userRegister._id,
      userName: userRegister.userName,
      email: userRegister.email,
    });
  } else {
    res.status(400);
    throw new Error("User Data Is Not Valid");
  }
});
//@access public
const userLogin = asyncHndler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("fill all fields");
  }
  const FindUser = await userModel.findOne({ email });
  if (!FindUser) {
    res.status(400);
    throw new Error("User Already Registerd");
  }
  if (FindUser && (await bcrypt.compare(password, FindUser.password))) {
    const accessToken = jwt.sign(
      // payload algo
      {
        USER: {
          userName: FindUser.userName,
          email: FindUser.email,
          id: FindUser._id,
        },
      },
      // secret code
      process.env.ACCESS_TOKEN_SECRET,
      // time to expire
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("UserName Or Password Are not Valid");
  }
});
//@desc register
//@route GET /api/users/current
//@access private
const currentUser = asyncHndler(async (req, res) => {
  // const Getcontacts = await contactsModel.find();
  res.status(200).json(req.USER);
});

module.exports = { userRegister, userLogin, currentUser };
