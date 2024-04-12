const asyncHndler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const tokenHandler = (req, res, next) => {
  let Token;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    Token = authHeader.split(" ")[1];
    jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User Is Not Authorized");
      }
      console.log(decoded);
      req.user = decoded.USER;
      next();
      if (!Token) {
        res.status(401);
        throw new Error("User Is Not Authorized or Token Is Missing");
      }
    });
  }
};

module.exports = tokenHandler;
