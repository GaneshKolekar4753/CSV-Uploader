const CSVFile = require("../models/files");


//show CSV file data
module.exports.showFile = async (req, res) => {
   let displayData = await CSVFile.findById(req.params.id);
   return res.render('showfile',{
     title: 'CSV View | Details',
     file: displayData.fileName,
     keys: displayData.file[0],
     results: displayData.file
   })
 };

//delete CSVFile from DB
module.exports.deleteFile = async (req, res) => {
  try {
    let deleteCSV = await CSVFile.findByIdAndDelete(req.params.id);
    if (deleteCSV) {
      console.log("CSV removed successfully ");
      return res.redirect("back");
    } else {
      console.log("CSV was not Found ");
      return res.redirect("back");
    }
  } catch (error) {
    console.log("Error in server", error);
    return res.redirect("back");
  }
};

