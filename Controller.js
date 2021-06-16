const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;
let user = models.User;
let recipe = models.Recipe;

//Usuários
app.post('/findByLogin', async (req, res) => {
  let response = await user.findOne({
    where: { login: req.body.login },
  });
  console.log(response);
  if (response === null) {
    //console.log(response);
  } else {
    //console.log(response);
    res.send(JSON.stringify('error'));
  }
});

app.post('/findById', async (req, res) => {
  let response = await user.findOne({
    where: { id: req.body.id },
  });
  console.log(response);
  if (response === null) {
    //console.log(response);
  } else {
    //console.log(response);
    res.send(JSON.stringify('error'));
  }
});

app.post('/update', async (req, res) => {
  console.log(req.body);
  let update = await user.update(
    {
      name: req.body.name,
      login: req.body.login,
      email: req.body.email,
      updatedAt: new Date(),
    },
    { where: { id: req.body.id } }
  );

  //console.log(update);
  //console.log(req.body.id);
  res.send(update);
});

app.post('/create', async (req, res) => {
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
});

app.post('/login', async (req, res) => {
  let response = await user.findOne({
    where: { password: req.body.password, login: req.body.login },
  });
  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    res.send(response);
  }
});

//Receitas
app.post('/createRecipe', async (req, res) => {
  console.log(req.body);
  let create = await recipe.create({
    method: req.query.method,
    dose: req.body.dose,
    water: req.body.water,
    title: req.body.title,
    recipe: req.body.recipe,
    note: req.body.note,
    userName: req.body.userName,
    userId: req.body.userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log(create);
  res.send(create);
});

app.get('/readAllRecipes', async (req, res) => {
  let read = await recipe.findAll({
    raw: true,
  });
  // console.log(read);
  res.send(read);
});

app.post('/readRecipes', async (req, res) => {
  let read = await recipe.findAll({
    where: { userId: req.body.userId },
  });
  res.send(read);
});

app.post('/findRecipebyId', async (req, res) => {
  // console.log(req.body);
  let read = await recipe.findOne({
    where: { id: req.body.id },
  });
  res.send(read);
});

app.listen(port, (req, res) => {
  console.log('Servidor rodando!');
});
