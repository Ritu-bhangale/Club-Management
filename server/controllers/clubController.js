const Clubs = require("../models/clubModel");
const ErrorHandler = require("../utils/errorHandler");


//create club -- admin
exports.createClub = async(req, res, next) => {

    const club = await Clubs.create(req.body);
    res.status(201).json({
        success: true,
        club
    })
}

//delete club -- admin
exports.deleteClub = async(req, res, next) => {

    let club = Clubs.findById(req.params.id);

    if (!club) {
        return res.status(500).json({
            success: false,
            message: "user not found"
        })
    }
    if(req.body.isAdmin===true){
    club = await Clubs.findByIdAndDelete(req.params.id);

    res.status(201).json({
        success: true,
        club
    })
    }else{
        return res.status(403).json("You can delete only your account")
    }
}


//update club -- admin
exports.updateClub = async(req, res, next) => {

    let club = Clubs.findById(req.params.id);

    if (!club) {
        return res.status(500).json({
            success: false,
            message: "user not found"
        })
    }
    if(req.body.isAdmin===true){
    club = await Clubs.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(201).json({
        success: true,
        club
    })
    }else{
        return res.status(403).json("You can update only your account")
    }
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

    const club = await Clubs.findById(req.body._id);

    if (!club) {
        return next(new ErrorHandler("Club not found", 404))
    }
        res.status(200).json({
            success: true,
            club
        })
}