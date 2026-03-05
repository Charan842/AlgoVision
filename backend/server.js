import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from './models/user.js';

const app = express();
const port = 8426;

const dburl = "mongodb+srv://Charan842:cherry%40842@user.rznz2nr.mongodb.net/AlgoVision?retryWrites=true&w=majority";

app.use(bodyParser.json());

mongoose.connect(dburl)
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
.catch(err => console.log(err));


app.get('/all', (req, res) => {

   User.find().then((resl)=>{
    res.send(resl)
   }).catch((err)=>{
    console.log(err)
   });

});