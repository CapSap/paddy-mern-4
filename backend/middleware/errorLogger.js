const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
};

module.exports = {
  errorLogger,
};
