const { people } = require("../data");
const personDelete = (req, res) => {
  const { id } = req.params;
  const person = people.find((per) => per.id === id);
  if (!person) {
    return res
      .status(400)
      .json({ status: false, result: `No person with ID of ${id} exists` });
  }
  const newPeople = people.filter((person) => person.id !== id);
  return res.status(200).json(newPeople);
};
module.exports = personDelete;
