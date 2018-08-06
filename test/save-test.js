const mocha = require('mocha');
const assert = require('assert');
const Admin = require('../models/admin');
// to run use npm run test
// Describe tests
describe('Saving records', () => {

    // Create tests
    it('Save a record to the database', function(done){
        let user = new Admin({
            name: "Test",
            password: "DigitalCrafts"
        });

        // built in mongoose fn that saves based on the model/schema
        // asynchronous request... not instant..
        user.save()
            .then((done) => {
                // isNew is mongoose fn
                // checks to see if its saved to db
                assert(user.isNew === false);
                // done() tells mocha we are done
                done();
            })
            // .done()
            .catch(error => console.log(error))
    });

});