const mongoose=require('mongoose');
const mongoDbURI=process.env.MONGODB_URI;
mongoose.connect(`${mongoDbURI}issue-tracker`);

const db=mongoose.connection;

db.on('err',console.error.bind(console,'Error connecting to MongoDB'));

db.once('open',function(){
   console.log('Connected to the Database');
})

module.exports=db;