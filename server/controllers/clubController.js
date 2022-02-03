const Clubs = require("../models/clubModel");
const ErrorHandler = require("../utils/errorHandler");


const updateUserProfile = async(req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.pic = req.body.pic || user.pic;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }
};
//create club -- admin
exports.createClub = async(req, res, next) => {
    const club = await Clubs.create(req.body);
    res.status(201).json({
        success: true,
        club
    })
}

//update club -- admin
exports.updateClub = async(req, res, next) => {

    let club = Clubs.findById(req.params.id);

    if (!club) {
        return res.status(500).json({
            success: false,
            message: "Club not Found"
        })
    }
    club = await Clubs.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(201).json({
        success: true,
        club
    })
}

exports.getAllClubs = async(req, res) => {

    const clubs = await Clubs.find();

    res.status(200).json({
        success: true,
        clubs
    })
}

//get club details
exports.getClubDetails = async(req, res, next) => {

    const club = await Clubs.findById(req.params.id);

    if (!club) {
        return next(new ErrorHandler("Club not found", 404))
    }

    res.status(200).json({
        success: true,
        club
    })
}