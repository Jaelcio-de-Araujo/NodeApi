import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://jaelcioaraujocontato:TnOf1E4QEU6QTQHi@cluster0.ayeinpw.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default conectaNaDatabase;


