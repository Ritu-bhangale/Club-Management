const { getAllClubs } = require("../controllers/clubController");
const express = require("express")
const router = express.Router();

router.route("/").get(getAllClubs);

module.exports = router;