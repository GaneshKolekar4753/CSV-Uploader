const mongoose=require('mongoose');

const fileSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    file:{
        type:Array
    }
},{
    timestamps:true
});