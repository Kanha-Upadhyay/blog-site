const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute=require("./routes/Users");
const postRoute=require("./routes/Posts");
const categoryRoute=require("./routes/Categories");
const multer =require("multer");
const path =require("path");


dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))//make image folder public 

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("hello connect to mongodb"))
  .catch((err) => console.log(err));

  const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"Images")
    },filename:(req,file,cb)=>{
      cb(null,req.body.name);
    }
  });


const upload =multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("The file has been uploaded");
})


app.use("/api/auth",authRoute);
app.use("/api/Users",userRoute);
app.use("/api/Posts",postRoute);
app.use("/api/Categories",categoryRoute);


app.listen(port, () => {
  console.log("the server is running");
});
