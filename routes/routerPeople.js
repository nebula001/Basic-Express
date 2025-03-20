const express = require("express");
const router = express.Router();
const { validatePeopleId } = require("../middlewares/validateId");
const { getAllPeople, getSinglePerson } = require("../controllers/getPeople");
const newPerson = require("../controllers/createPerson");
const personUpdate = require("../controllers/updatePeople");
const personDelete = require("../controllers/deletePerson");

router.get("/", getAllPeople);
router.get("/:id", validatePeopleId, getSinglePerson);
router.post("/", newPerson);
router.put("/:id", validatePeopleId, personUpdate);
router.delete("/:id", validatePeopleId, personDelete);

module.exports = router;
