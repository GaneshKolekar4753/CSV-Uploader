const express=require('express');
const homeController=require('../controller/homeController');

const router=express.Router();

router.get('/',homeController.home);

router.post('/file/uploads', homeController.uploadFile);

router.use('/file',require('./files'));

module.exports= router;