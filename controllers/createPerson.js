const { people } = require("../data");
const newPerson = (req, res) => {
  const { id, name } = req.body;
  const newPerson = {};
  if (id) {
    newPerson.id = id;
  }
  if (name) {
    newPerson.name = name;
  }
  const isEmpty = Object.keys(newPerson).length === 0;
  if (isEmpty) {
    return res.status(400).json({
      status: false,
      result: "Please provide atleast id or name or both",
    });
  }
  const finalPeople = [...people, newPerson];
  return res.status(200).json(finalPeople);
};
module.exports = newPerson;
