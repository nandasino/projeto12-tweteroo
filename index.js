import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios=[];
const tweets =[];

app.post("/sign-up",(req,res)=>{
    const {username, avatar} = req.body;
    usuarios.push({
        username,
        avatar
    });
    console.log(usuarios);
    res.send("OK");
});
app.post("/tweets",(req,res)=>{
    const {username, tweet} = req.body;
    tweets.push({
        username,
        tweet
    });
    console.log(tweets);
    res.send("OK");
});

app.listen(5000);