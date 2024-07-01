import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './config/db.js';
import collection from './model/feedbackModel.js';





dotenv.config();
connectdb()


const PORT = 4000;

const app = express();

//Middleware



app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.send('<h1>Hello World..!</h1>');
});

// USER FEEDBACK

app.post("/api/feedback",async(req,res) => {
    const {name,email,phone,feedback} = req.body
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(feedback);
    
    try{
        const Collection = await collection.create({name,email,phone,feedback})
        res.status(201).json({message:"feedback submited successfully"}) 
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
   
   
})

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));