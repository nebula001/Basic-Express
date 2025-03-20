const { people } = require("../data");

const getAllPeople = (req, res) => {
  return res.status(200).json(people);
};

const getSinglePerson = (req, res) => {
  const { id } = req.params;
  const per = people.find((person) => person.id === id);
  if (per) {
    return res.status(200).json(per);
  }
  return res
    .status(400)
    .json({ status: false, result: `No Person with id = ${id} exists` });
};

module.exports = { getAllPeople, getSinglePerson };
