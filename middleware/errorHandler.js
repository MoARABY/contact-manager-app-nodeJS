const { constants } = require("../constants");

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_FAILED:
      res.json({
        title: "Validation Failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    default:
      res.json({
        title: "Cannot Specify",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
  }
};

module.exports = errorHandler;
