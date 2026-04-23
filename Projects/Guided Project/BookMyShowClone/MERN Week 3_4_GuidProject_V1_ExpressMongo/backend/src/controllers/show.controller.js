const showService = require("../services/show.service");

//create show:Admin

exports.createShow = async (req,res,next) => {
    try{
        const shows = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message : "show created successfully",
            data: show
        });
    }
    catch(error){
        next(error);
    };
}

//get shows
exports.getShows = async (req,res,next) => {
    try{
        const shows = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message : "shows fetced successfully",
            data: show
        });
    }
    catch(error){
        next(error);
    }; 
}


//get single show realated 
exports.getShowById = async (req,res,next) => {
    try{
        const show = await showService.getShowById(req.params.id);
        res.status(200).json({
            success:true,
            message : "Shows fetced successfully",
            data: show,
        });
    }
    catch(error){
        next(error);
    }; 
}



//UPDATE SHOW admin
exports.updateShow = async (req,res,next) => {
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message : "Shows updated successfully",
            data: show,
        });
    }
    catch(error){
        next(error);
    }; 
}

//delete show 
exports.deleteShow = async (req,res,next) => {
    try{
     await showService.deleteShow(req.params.id);
        res.status(200).json({
            success:true,
            message : "Shows deleted successfully",
        });
    }
    catch(error){
        next(error);
    }; 
}





