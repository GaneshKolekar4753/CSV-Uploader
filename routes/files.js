const express=require('express');
const fileController=require('../controller/fileController');

const router=express.Router();

router.get('/view',fileController.showFile);

router.get('/delete',fileController.deleteFile);

module.exports= router;