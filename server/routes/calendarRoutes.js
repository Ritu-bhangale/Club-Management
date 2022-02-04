const express = require("express");
const { createEvent, getEvent, updateEvent } = require("../controllers/calendarController");
const router = express.Router();

router.route("/create").post(createEvent);
router.route("/").get(getEvent)
router.route("/:id").put(updateEvent)

module.exports = router;