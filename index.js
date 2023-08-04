const express = require("express");
const app = express();
const connectDB = require("./connectDB");
const apiRouter = require("./Routes/api")

const PORT = process.env.PORT | 5000;

connectDB();
app.get("/",(req,res)=>{
    res.json({message:"oli"})
})
app.use("/api",apiRouter)

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})