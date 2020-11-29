const User = require('../Models/User');

const getAllRegularClasses = async (req, res, next) => {
  if (req.query.day) {
    return next();
  }
  const { id } = req.body;

  const { regularClasses } = await User.findOne({ _id: id });

  return res.json(regularClasses);
};

const getAllRegularClassesByDay = async (req, res, next) => {
  const { day } = req.query;
  const { id } = req.body;

  const { regularClasses } = await User.findOne({ _id: id });

  return res.json(regularClasses[day]);
};

const postNewRegularClass = async (req, res, next) => {
  const { id, newClass } = req.body;

  const user = await User.findOne({ _id: id });

  const indexOfNewClassInArray =
    user.regularClasses[newClass.dayOfWeek].push({ ...newClass.data }) - 1;
  const updatedUser = await user.save();

  return res
    .status(201)
    .json(
      updatedUser.regularClasses[newClass.dayOfWeek][indexOfNewClassInArray]
    );
};

module.exports = {
  getAllRegularClasses,
  getAllRegularClassesByDay,
  postNewRegularClass,
};
