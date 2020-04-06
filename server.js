const express = require("express");
const app = express();

//Config
app.use(express.static("./build"));
app.use(express.json({ limit : "50mb" }));
app.use(express.urlencoded({ extended : true, limit : "50mb" }));

//Api
app.use(require("./api/PointEntry"));

//React
app.get("*",(req,res) => {
    const html = __dirname + "/build/index.html";
    res.sendFile(html);
})

app.listen(process.env.PORT || 3000,(err) => {
    if(err) console.log(err);
    else console.log("Running port 30000");
})