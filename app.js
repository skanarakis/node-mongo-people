const express = require('express');
const app = express();

require('dotenv/config');
const mongoConnect = require('./util/mongo');
const Person = require('./persons/person');
const PersonCtrl = require('./persons/personController');
const util = require('./util/util');

mongoConnect();

app.use(express.json());

app.post('/persons', (req, res, next) => {
    console.log('Received', req.body);
    const person = util.extractPerson(req);
    PersonCtrl.save(person)
    .then(() => res.send(`${person.name} successfully saved in database\n`))
    .catch(err => res.status(500).send(`Error: ${err}\n`));
});

app.delete('/persons/:name', (req, res, next) => {
    const name = req.params.name;
    console.log('Delete request for', name);
    PersonCtrl.remove(name)
    .then(() => res.send(`${name} successfully deleted from database\n`))
    .catch(err => res.status(500).send(`Error: ${err}\n`));
});

app.use(function(req, res, next) {
    console.log('Unknown Route!');
    res.status(404).send('Sorry ... no such route\n');
});

app.listen(process.env.SERVER_PORT, 
    () => console.log(`Listening in ${process.env.SERVER_PORT}`));