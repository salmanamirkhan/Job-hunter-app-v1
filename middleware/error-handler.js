const errorHandlerMiddleware = (req, res) => {
  res.status(500);
  res.send({ msg: 'there was an error' });
};

export default errorHandlerMiddleware;
