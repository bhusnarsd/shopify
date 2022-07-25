const express =  require ("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { result } = require("lodash");
const { rmSync } = require("fs");
const { render } = require("ejs");
const { title } = require("process");
const blogRoutes = require("./routes/storeRoutes");
// express app

const app = express();

//connect to mongodb
const dbURI = "mongodb://localhost:27017/nodeproject" 
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) =>app.listen(3010) )
.catch((err)=> console.log(err));


// register view engine 
app.set("view engine", "ejs");

// listen for request 


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

// routes 
app.get("/", (req,res) => {
    res.redirect("/store");

});


//store routes
app.use("/store",blogRoutes);

 // 404 page
app.use((req,res) => {
res.render("404", {title:"404"});
});

