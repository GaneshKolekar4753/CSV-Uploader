const express=require('express');
const fileController=require('../controller/fileController');

const router=express.Router();

router.get('/view/:id',fileController.showFile);

router.get('/delete/:id',fileController.deleteFile);

module.exports= router;