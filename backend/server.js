import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port=8426;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});

app.get('/',(req,res)=>{
   res.status(200).json({message:"succesfully HPPPPPPPPPP"});
});
app