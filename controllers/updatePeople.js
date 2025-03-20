const { people } = require("../data");
const personUpdate = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((per) => per.id === id);
  if (!person) {
    return res
      .status(400)
      .json({ status: false, result: `No person with ID of ${id} exists` });
  }
  const newPeople = people.map((person) => {
    if (person.id === id) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json(newPeople);
};
module.exports = personUpdate;
