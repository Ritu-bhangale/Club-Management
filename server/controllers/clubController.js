const Clubs = require("../models/clubModel");
const ErrorHandler = require("../utils/errorHandler");

//create club -- admin
exports.createClub = async (req,res,next)=>{
    const club = await Clubs.create(req.body);
    res.status(201).json({
        success:true,
        club
    })
}

//update club -- admin
exports.updateClub = async (req,res,next)=>{
    
    let club = Clubs.findById(req.params.id);

    if(!club){
        return res.status(500).json({
            success:false,
            message:"Club not Found"
        })
    }
    club = await Clubs.findById(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(201).json({
        success:true,
        club
    })
}

exports.getAllClubs = async(req,res)=>{

    const clubs = await Clubs.find();

    res.status(200).json({
        success:true,
        clubs
    })
}

//get club details
exports.getClubDetails = async(req,res,next)=>{

    const club = await Clubs.findById(req.params.id);

    if(!club){
        return next(new ErrorHandler("Product not found",404))
    }

    res.status(200).json({
        success:true,
        club
    })
}