const { MongoClient } = require("mongodb");

const url = "mongodb+srv://miguelmachadoaa:DkSuG4FA4rwoIrWo@cluster0.utyci1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

const mongodb = client.db('presupuesto');

module.exports = mongodb;
