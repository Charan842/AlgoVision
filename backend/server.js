import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = 8426;

const dburl = "mongodb+srv://Charan842:cherry%40842@user.rznz2nr.mongodb.net/AlgoVision?retryWrites=true&w=majority";

app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on http://localhost:${port}`);
    });
})
.catch(err=>console.log(err));

app.use("/api/auth",authRoutes);
