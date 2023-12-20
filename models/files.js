const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');

const FILE_PATH=path.join('/uploads/csvFiles');

const fileSchema=new mongoose.Schema({
    fileName:{
        type: String,
        required: true
    },
    file:{
        type:Array
    }
},{
    timestamps:true
});


//multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..', FILE_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });

//static functions
fileSchema.statics.uploadCSVFile=multer({storage:storage}).single('csv');
fileSchema.statics.csvPath=FILE_PATH;
//exports models
const CSVFile=mongoose.model('CSVFile',fileSchema);
module.exports=CSVFile;