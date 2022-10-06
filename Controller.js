const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cities = models.Citie;
const routes = models.Route;
const attraction_routes = models.Attraction_Route;
const Attraction = models.Attraction;
const dangerousplace_routes = models.DangerousPlace_Route;
const Dangerousplace = models.DangerousPlace;

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


app.post('/create/attraction', async (req,res)=>{
    let create = await Attraction.create({
        Name: req.body.Name,
        Desc: req.body.Desc,
        Address: req.body.Address,
        createdAt: new Date(), 
        updatedAt: new Date()
    });
    res.send(create);
    
    let createAtRt = await attraction_routes.create({
        attractionId: create.id,
        routeId: req.body.routeId
    });
});

app.post('/create/route', async (req,res)=>{
    let create = await routes.create({
        DescRoute: req.body.Desc,
        Distance: req.body.Distance,
        citieId: req.body.citieId,
        createdAt: new Date(), 
        updatedAt: new Date()
    });
    res.send(create);
});

app.get('/dangerousplace/:routeid', async(req,res)=>{
    let response = await dangerousplace_routes.findAll({
        attributes: ['dangerousplaceId'],
        where:{routeid: req.params.routeid},
        raw: true,
        include: [{
            model: Dangerousplace,
            required: true,
            attributes: ['Address','Desc']
        }],
        order: [['id', 'ASC']]
    });
    res.json(response)
});

app.post('/create/dangerousplace', async (req,res)=>{
    let create = await Dangerousplace.create({
        Desc: req.body.Desc,
        Address: req.body.Address,
        createdAt: new Date(), 
        updatedAt: new Date()
    });
    res.send(create);
    
    let createAtRt = await dangerousplace_routes.create({
        dangerousplaceId : create.id,
        routeId: req.body.routeId
    });
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando')
});