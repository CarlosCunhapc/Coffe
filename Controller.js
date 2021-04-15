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

app.post('/login', async (req,res)=>{
    let response= await user.findOne({
        where:{password: req.body.password, login: req.body.login}
    });
    console.log(response);
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
})


// app.get('/create', async (req,res)=>{
//     let create = await user.create({
//         name: 'Carlos',
//         password: '123',
//         login: 'corytus',
//         email: 'carlos@cunha',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     });
//     res.send('Usuário criado com sucesso!');
// })

app.listen(port,(req,res)=>{
    console.log('Servidor rodando!');
});