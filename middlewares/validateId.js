const validateProductId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: `Invalid Product Id`,
    });
  }
  req.params.id = Number(id);
  next();
};

const validatePeopleId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: `Invalid Person Id`,
    });
  }
  req.params.id = Number(id);
  next();
};

module.exports = { validateProductId, validatePeopleId };
