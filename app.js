const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://mobilea2:ludmilla@cluster0.gswd2.mongodb.net/deposito?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Banco de dados MongoDB Conectado.')
});

mongoose.connection.on('error', (error) => {
    console.log('Database error ' + error)
})

let port = process.env.PORT || 3000;

const api = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api', api);

app.listen(process.env.port || port, () => {
    console.log("API bebidas executando na porta: " + port);
})