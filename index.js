const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const fs = require('fs'); // will be use to write images
const path = require('path'); // do we need?
const port = 4000; // change this to .env file
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const staticMiddleware = express.static('build');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'public/images/'});
app.use(staticMiddleware)

const {
    createAdmin,
    findAllAdmins,
    deleteAdmin,
    findOneAdmin,
    createCompany,
    deleteCompany,
    updateAdmin, 
    updateCompany,
    findAllCompanies,
    findOneCompany,
    updateCompanyPhoto,
    findCompanyByIndustry,
    findCompanyByStage 
} = require('./db.js');


app.engine('.hbs', expressHbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// const static = express.static;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// API routes if we use express router???
// require('./routes')(app);

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

// Get rid of this route for when this goes live.... no need for it
// Returns JSON of name/userId of all admins
app.get('/api/admins/', (req, res) => {
    findAllAdmins()
        .then(admins => res.json(admins))
        .catch((err) => res.send(err));
});

// Returns JSON of name/userId for specific admin
app.get('/api/admins/:id', (req, res) => {
    findOneAdmin(req.params.id)
        .then(company => res.json(company))
        .catch((err) => res.send(err));
});

app.post('/api/deletecompany/:id', (req,res) => {
    let companyId = req.params.id;
    deleteCompany(companyId)
    .then(company => res.json(company))
    .catch((err) => res.send(err));
})

// updates name/userId for specific admin
app.post('/api/updateadmins/:id', (req, res) => {
    updateAdmin(req.body)
    .then(admin => res.json(admin))
    .catch((err) => res.send(err));
});

// create new company
app.post('/api/createcompany', (req, res) => {
    // console.log(req.body)
    let newCompanyObject = {
        name: req.body.name,
        summary: req.body.summary,
        industry: req.body.industry,
        stage: req.body.stage,
        productAndServices: req.body.productAndServices,
        needs: req.body.needs,
        website: req.body.website,
        email: req.body. email,
        phone: req.body.phone,
        youtubeLink: req.body.youtubeLink,
        paypalLink: req.body.paypalLink
    };
    createCompany(newCompanyObject)
        .then(company => res.json(company))
        .catch((err) => res.send(err));
});

app.post('/api/createcompanypicture/:id', upload.single('picture'), (req, res) => {
    fs.rename(req.file.path, 
    `public/images/${req.params.id}`, 
    (err) => { 
        if (err) {
            console.log(err);
        }
    })
    let imagePath = `public/images/${req.params.id}`;
    let id = req.params.id;
    let companyObject = {
        _id: id,
        picture: imagePath
    };
    updateCompanyPhoto(companyObject)
        .then(company => res.json(company))
        .catch((err) => res.send(err));
});

//updates specific company 
app.post('/api/updatecompany/:id', (req, res) => {
    console.log(req.body)
    let newCompanyObject = {
        _id: req.params.id,
        name: req.body.name,
        summary: req.body.summary,
        industry: req.body.industry,
        stage: req.body.stage,
        productAndServices: req.body.productAndServices,
        needs: req.body.needs,
        website: req.body.website,
        email: req.body. email,
        phone: req.body.phone,
        youtubeLink: req.body.youtubeLink,
        paypalLink: req.body.paypalLink
    };
    updateCompany(newCompanyObject)
        .then(company => res.json(company))
        .catch((err) => res.send(err));
});

app.post('/api/updatecompanypicture/:id', upload.single('picture'), (req, res) => {
    fs.rename(req.file.path, 
    `public/images/${req.params.id}`, 
    (err) => { 
        if (err) {
            console.log(err);
        }
    })
    let imagePath = `public/images/${req.params.id}`;
    let id = req.params.id;
    let companyObject = {
        _id: id,
        picture: imagePath
    };
    updateCompanyPhoto(companyObject)
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

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});

