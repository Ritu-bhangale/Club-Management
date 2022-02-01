const express = require("express");
const { createEvent, getEvent } = require("../controllers/calendarController");
const router = express.Router();

router.route("/create").post(createEvent);
router.route("/").get(getEvent)

module.exports = router;