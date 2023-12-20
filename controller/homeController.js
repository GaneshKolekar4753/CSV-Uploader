const { timeStamp } = require("console");
const CSVFile = require("../models/files");
const fs=require('fs');
const papaparse=require('papaparse');
//render home page
module.exports.home = async function (req, res) {
    let files=await CSVFile.find({}).sort('_createdAt');
  return res.render("home", {
    title: "Home",
    files:files
  });
};

//upload csv file
module.exports.uploadFile = async function (req, res) {
  CSVFile.uploadCSVFile(req, res, async function (err) {
    if (err) {
      console.log("**** Error in Multer:", err);
    }
    try {
      let csvfile = await CSVFile.findOne({ fileName: req.file.originalname });
      console.log('filename',req.file.originalname);
      if (csvfile) {
        console.log("Error", "File already exist !");
        return res.redirect("back");
      }


      //parsing CSV using papaparse
      const CSVFileUP = req.file.path;
      const csvData = fs.readFileSync(CSVFileUP, 'utf8');

      const conversedFile = papaparse.parse(csvData, { 
        header: false 
      
      });

      //allowing only CSV input type
      if (req.file && req.file.mimetype == "text/csv") {
        //inserting the converted JSON to DB
        let csvFile =await  CSVFile.create({
          fileName: req.file.originalname,
          storageFilename:req.file.filename,
          file: conversedFile.data,
        });
        console.log('file uploaded successfully');
        return res.redirect("back");
      } else {
        console.log("error", "only CSV file allowed");
        return res.redirect("back");
      }


    } catch (error) {
      console.log("error in file upload", err);
      return res.render("uploaderror",{
        title:"error"
      });
    }
  });
};



