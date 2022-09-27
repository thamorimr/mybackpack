const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
const cities = models.Citie;
const routes = models.Route;
const attraction_routes = models.Attraction_Route;
const Attraction = models.Attraction;
const dangerousplace_routes = models.Dangerousplace_route;
const dangerousplace = models.Dangerousplace;

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

app.get('/attraction/:routeid', async(req,res)=>{
    let response = await attraction_routes.findAll({
        attributes: ['attractionId'],
        where:{routeid: req.params.routeid},
        raw: true,
        include: [{
            model: Attraction,
            required: true,
            attributes: ['Name','Desc','Address']
        }],
        order: [['id', 'ASC']]
    });
    res.json(response)
});

app.get('/attraction/descattraction/:attractionid', async(req,res)=>{
    let response = await Attraction.findAll({
        attributes: ['Id','Name','Desc','Address'],
        where:{id: req.params.attractionid}
    });
    res.json(response)
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando')
});