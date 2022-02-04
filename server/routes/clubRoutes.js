const { getAllClubs, createClub, updateClub, getClubDetails } = require("../controllers/clubController");
const express = require("express")
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../../club-management/public/uploads/")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

router.route("/").get(getAllClubs);
router.route("/new", upload.single("logoImage")).post(createClub)
router.route("/:id").put(updateClub).get(getClubDetails)

module.exports = router;