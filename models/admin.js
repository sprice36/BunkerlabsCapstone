const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const AdminSchema = new Schema({
    name: String,
    password: String
});

const Admin = mongoose.model('admins', AdminSchema);

module.exports = Admin;