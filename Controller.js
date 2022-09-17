const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
const cities = models.Citie;
const routes = models.Route;

app.get('/', async(req,res)=>{
    res.json({title: 'Hello World'})
});

app.get('/cities', async(req,res)=>{
    let read = await cities.findAll({
        raw:true
    });
    res.json(read)
});

app.get('/routes', async(req,res)=>{
    let response = await routes.findAll({
        raw:true
    });
    res.json(response)
});

app.get('/routes/:citieid', async(req,res)=>{
    let response = await routes.findAll({
        where:{citieId: req.params.citieid}
    });
    res.json(response)
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando')
});