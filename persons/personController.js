const Person = require('./person');

const save = function(personObj) {
    console.log('Attempt to save', personObj);
    return new Promise((resolve, reject) => {
        personObj.save(function (err) {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(personObj.name + " saved to persons collection");
            resolve();
        });
    });
};

const remove = function(name) {
    return new Promise((resolve, reject) => {
        Person.deleteOne({name: name}, function (err) {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(name + " removed from persons collection");
            resolve();
        });
    });
};

module.exports.save = save;
module.exports.remove = remove;