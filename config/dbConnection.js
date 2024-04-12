const mongoose = require("mongoose");

const DB_Connection = async () => {
  try {
    const Db_connect = await mongoose
      .connect(process.env.DB_Connection)
      .then(console.log("connect successfuly to Database"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DB_Connection;
