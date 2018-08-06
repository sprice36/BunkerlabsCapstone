const mongoose = require('mongoose');
const mongooseUrl = 'mongodb://localhost:27017/Bunkerlabs';
const Admin = require('./models/admin.js');
const Company = require('./models/company.js')
// Connect to mongodb
mongoose.connect(mongooseUrl, 
{useNewUrlParser: true});
// Get mongoose to use the global promise library
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:' ));
db.once('open', () => {
    console.log('Connected to mongodb!');
});

function createAdmin(name, password) {
    var user = new Admin({
        name: name,
        password: password
    });

    return user.save((err) => {
        if (err) return console.log(err);
        console.log('saved user');
        // db.close();
    });
};

function findAllAdmins() {
    return Admin.find(
        {},
        'name',
        (err, admins) => {
        // db.close();
        if (err) return console.log(err);
        return admins;
    });
};

function findOneAdmin(userId) {
    return Admin
    .findById(userId)
    .select('name')
    .exec()
    .then(admin => {
        // db.close();
        return admin;
    })
    .catch(err => console.log(err));
};

function deleteAdmin(userId) {
    return Admin
    .findByIdAndRemove(userId)
    .exec(admin => {
    return admin
    })
    .catch(err => console.log(err));
};

function findAllCompanies() {
    return Company
    .find()
    .exec()
    .then(companies => {
        // db.close();
        return companies;
    })
    .catch(err => console.log(err));
};

function findOneCompany(userId) {
    return Company
    .findById(userId)
    .exec()
    .then(company => {
        // db.close('closing');
        return company;
    })
    .catch(err => console.log(err));
};

// Mongoose functions
// findById()
// findOne()
// findByIdAndRemove()
// findByIdAndUpdate()
// findOneAndRemove()
// findOneAndUpdate()
// modelname.find()
// count()
// populate() - method in a query to replace id with data

module.exports = {
    createAdmin,
    findAllAdmins,
    findOneAdmin,
    deleteAdmin,
    // updateAdminPassword,
    // createCompany,
    // editCompany,
    // deleteCompany,
    findAllCompanies,
    findOneCompany,
    // findCompanyByFilter
};

// If you don 't specify a callback then the API will return a variable of type Query. You can use this query object to build up your query and then execute it (with a callback) later using the exec() method.

// // find all athletes that play tennis
// var query = Athlete.find({
//     'sport': 'Tennis'
// });

// // selecting the 'name' and 'age' fields
// query.select('name age');

// // limit our results to 5 items
// query.limit(5);

// // sort by age
// query.sort({
//     age: -1
// });

// // execute the query at a later time
// query.exec(function (err, athletes) {
//     if (err) return handleError(err);
//     // athletes contains an ordered list of 5 athletes who play Tennis
// })

// Athlete.
// find().
// where('sport').equals('Tennis').
// where('age').gt(17).lt(50). //Additional where query
// limit(5).
// sort({
//     age: -1
// }).
// select('name age').
// exec(callback); 
// where callback is the name of our callback function.
