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
    // findCompanyByFilter 
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

app.post('/api/createcompanypicture/:id', upload.single('picture'), (req, res) => {
    // console.log(req.body);
    console.log(req.file);
    res.send([]);
});

app.post('/api/createcompany', (req, res) => {
    // add in fs write file for images here and then pass location of stored file to newCompanyObject
    // console.log(req.body.picture);
    // upload.single(req.body.picture);
    // let pictureLocation = '/images/' + req.body._id;
    // fs.rename(req.body.picture, pictureLocation, (err) => {
    //     if (err) {
    //         console.log(err);
    //     };
    // });
    
    // File input field name is simply 'file'
    // app.post('/file_upload', upload.single('file'), function (req, res) {
    //     var file = __dirname + '/' + req.file.filename;
    //     fs.rename(req.file.path, file, function (err) {
    //         if (err) {
    //             console.log(err);
    //             res.send(500);
    //         } else {
    //             res.json({
    //                 message: 'File uploaded successfully',
    //                 filename: req.file.filename
    //             });
    //         }
    //     });
    // });

    // let needsArray = [req.body.need1, req.body.need2, req.body.need3];
    let newCompanyObject = {
        name: req.body.name,
        // picture: req.body.picture,
        // picture: pictureLocation,
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

//updates specific company 
app.post('/api/updatecompany/:id', (req, res) => {
    updateCompany(req.body)
        .then(admin => res.json(admin))
        .catch((err) => res.send(err));
});


app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});



// ******************************
// DB FUNCTION TESTS
// 
// createAdmin('Stephen3', 'test');
// findAllAdmins()
//     .then(users => console.log(users))
// deleteAdmin('5b679b6b49668fdc86930d7c');

// findOneAdmin('5b65fe5c09017dc174024180')
//     .then(user => console.log(user));
// findAllCompanies()
//     .then(companies => console.log(companies))
// findOneCompany('5b67b6060b0c077bed36ab1a')
//     .then(company => console.log(company.json()))


// console.log(admin);
// console.log(admin);
// .then((result) => {
// console.log(Admin.find());
// ********************************