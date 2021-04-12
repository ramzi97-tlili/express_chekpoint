const express = require ("express");
const path = require("path")
const app = express();

app.use(date =(req,res,next)=>{
    let newdate=new Date()
    let hour=newdate.getHours()
    let day=newdate.getDay()
    if((hour<9|| hour>17)&&((day==7 || day==1))){
        res.send("closed")
    }
    else{next()}

})


app.use(express.static(path.join(__dirname,"public")))

app.listen(5000,(err)=>{
    if(err) console.log('error')
    else console.log('server is running on port 5000')
})  