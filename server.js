const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
const path = require('path')
mongoDB();
app.use(express.json())

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use("/api", require("./Router/Usercreate"));

app.use("/api", require("./Router/DisplayData"));
app.use("/api", require("./Router/OrderData"));
app.use("/api", require("./Router/login"));


//deployement
app.use(express.static(path.join(__dirname, '/build')));
console.log("my opath",path.join((__dirname,  '/build/index.html')))
app.get('*',(req,res)=>{
  res.sendFile(path.join((__dirname, '/build/index.html')))
})

//
app.listen(port , () =>{
    console.log(`app is listen on port ${port}`);
})

// Middle for Router by Thapa technical

