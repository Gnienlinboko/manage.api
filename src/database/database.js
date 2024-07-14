

import mongoose from 'mongoose';


const server = '127.0.0.1:27017'; // REPLACEZ AVEC VOTRE SERVEUR DE BASE DE DONNEES

const database = 'manage_db'; // REPLACEZ AVEC LE NOM DE VOTRE BASE DE DONNEES

class Database {

  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.set("strictQuery", false);

    mongoose.connect(`mongodb://${server}/${database}`)

    .then(() => {
        console.log('La connection à la base db a été établie avec succes')
    })

    .catch(err => {
        console.error('Erreur de connexion')
    })

}


}

export default Database;