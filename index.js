import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios=[];
const tweets =[];

app.post("/sign-up",(req,res)=>{
    const {username, avatar} = req.body;
    if(!username|| !avatar){
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    };
    usuarios.push({
        username,
        avatar
    });
    res.status(201).send({message:"OK"});
});
app.post("/tweets",(req,res)=>{
    const {username, tweet} = req.body;
    const {avatar} = usuarios.find(u=>u.username===username);

    if(!username|| !tweet){
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    };
    tweets.push({
        username,
        avatar,
        tweet
    });
    res.status(201).send("OK");
});

app.get("/tweets",(req,res)=> {
    const tweetsfeed= tweets.slice(-10);
    res.send(tweetsfeed);
});

app.listen(5000);