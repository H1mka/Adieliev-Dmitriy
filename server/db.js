const { MongoClient } = require('mongodb');

const client = new MongoClient(
    'mongodb+srv://kakdela24101610:QP2NvPOWIEhvRIm1@cluster0.koxgrpd.mongodb.net/?retryWrites=true&w=majority'
);

module.exports = client;
