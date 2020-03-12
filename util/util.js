const Person = require('../persons/person');

const extractPerson = function(reqObj) {
    const person = new Person({
        name: reqObj.body.name,
        age: reqObj.body.age,
        surname: reqObj.body.surname
    });
    return person;
};

module.exports.extractPerson = extractPerson;