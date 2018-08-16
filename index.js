const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const fs = require('fs'); // will be use to write images
const port = 4000; // change this to .env file
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const staticMiddleware = express.static('public');
const cors = require('cors');
const multer = require('multer');
const upload = multer({
    dest: 'public/images/'
});
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const router = express.Router();
const expressJwt = require('express-jwt');
const {createAccount, verifyToken, verifyUser} = require('./routes/auth');
const admin = require('./admin')

app.use(staticMiddleware)

const {
    findAllCompanies,
    findOneCompany,
    findCompanyByIndustry,
    findCompanyByStage ,
    
} = require('./db.js');

app.engine('.hbs', expressHbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// This is for cross domain fun --> from Chris
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    next();
});

app.use(cors({
    origin: ['*'],
    methods: ['GET', 'POST'],
    credentials: true
}));

//public routes
// Returns JSON data for all companies
app.get('/api/companies/', (req, res) => {
    findAllCompanies()
        .then(companies => res.json(companies))
        .catch((err) => res.send(err));
});

// Returns JSON data for specific company
app.get('/api/companies/:id', (req, res) => {
    findOneCompany(req.params.id)
        .then(company => res.json(company))
        .catch((err) => res.send(err));
});

//filter all companies by industry 
app.get('/api/company/byIndustry/:industry', (req, res) => {
    let industry = req.params.industry;
    findCompanyByIndustry(industry)
        .then(industry => res.json(industry))
        .catch((err) => res.send(err))

});

//filter all companies by stage
app.get('/api/company/byStage/:stage', (req, res) => {
    let stage = req.params.stage;
    findCompanyByStage(stage)
        .then(stage => res.json(stage))
        .catch((err) => res.send(err))

});

//filter all companies by industry 
app.get('/api/company/byIndustry/:industry', (req, res) => {
    let industry = req.params.industry; 
        findCompanyByIndustry(industry)
            .then(industry => res.json(industry))
            .catch((err) => res.send(err))

});

//filter all companies by stage
app.get('/api/company/byStage/:stage', (req, res) => {
    let stage = req.params.stage; 
        findCompanyByStage(stage)
            .then(stage => res.json(stage))
            .catch((err) => res.send(err))
});

app.post('/api/verifyToken', verifyToken, (req,res) => {
    res.send('OK')
})

//routes ONLY if authentication is verified
// Returns JSON of name/userId of all admins
app.post('/api/admin/', verifyUser) 

app.use(verifyToken, admin)

//404 message for nonexistent routes
app.get('*', function (req, res) {
    res.send('page not found', 404);
});
app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});
