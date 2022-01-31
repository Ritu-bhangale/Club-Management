const { getAllClubs, createClub, updateClub, getClubDetails } = require("../controllers/clubController");
const express = require("express")
const router = express.Router();

router.route("/").get(getAllClubs);
router.route("/new").post(createClub)
router.route("/:id").put(updateClub).get(getClubDetails)

module.exports = router;