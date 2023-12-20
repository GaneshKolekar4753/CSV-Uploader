module.exports.showFile=function(req,res){
   return res.render('showfile',{
    title:"File Viewer"
   });
}

module.exports.deleteFile=function(req,res){
   return res.end('<h1>delete file</h1>')
}