import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios=[];

app.post("/sign-up",(req,res)=>{
    const {username, avatar} = req.body;
    usuarios.push({
        username,
        avatar
    });
    console.log(usuarios);
    res.send("OK");
});

app.listen(5000);