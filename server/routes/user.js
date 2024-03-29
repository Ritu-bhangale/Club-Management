const router = require("express").Router();
const { User, validate } = require("../models/user")
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/errorHandler");

router.route('/find').get((req, res) => {
    User.find()
        .then(name => res.json(name))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post("/", async(req, res) => {
    try {
        const { error } = validate(res.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send({ message: "User already exist!" });
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashPassword }).save();
        const token = await user.generateAuthToken();
        res.status(200).cookie("token", token).json({
            success:true,
            user,
            token,
        });
    } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
    }
});


module.exports = router;