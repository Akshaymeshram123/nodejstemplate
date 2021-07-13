const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express();

app.use(express.static(path.join(__dirname,"../public")))
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,path.join("../templates/partials")))


app.get("/",(req,res)=>{
    res.render("home")
})



app.listen(80,()=>{
    console.log("connected")
})