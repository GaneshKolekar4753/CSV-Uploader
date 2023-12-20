const express=require('express');
const port=8000;
const app=express();

const path=require('path');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongodb');
//set static files
app.use(express.static('./assets'));

// use layouts
app.use(expressLayouts);
//extract styles and scripts from layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require('./routes/index'));

//setup view engine(ejs)
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log('Error in creating server',err);
    }
    console.log(`Server is up on port:${port}`);
});