const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

let port=process.env.PORT || 3000;
let user=models.User;
let recipe=models.Recipe;

app.post('/findByLogin', async (req, res)=>{
    let response= await user.findOne({
        where:{login: req.body.login}
    });
    console.log(response);
    if(response === null){
        //console.log(response);
    }else{
        //console.log(response);
        res.send(JSON.stringify('error'));
    }
})

app.post('/updateUser', async (req,res)=>{
    let updateUser = await user.update({
        name: req.body.name,
        login: req.body.login,
        email: req.body.email,
        updatedAt: new Date(),
    });
    console.log(update);
    res.send(update);
})

app.post('/create', async (req,res)=>{
    let create = await user.create({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    console.log(create);
    res.send(create);
})

app.post('/login', async (req,res)=>{
    
    let response= await user.findOne({
        where:{password: req.body.password, login: req.body.login}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
})

app.listen(port,(req,res)=>{
    console.log('Servidor rodando!');
});