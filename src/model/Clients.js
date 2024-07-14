

import mongoose from "mongoose";


let ClientsSchema = new mongoose.Schema({
    nom:{type:'string', require:true},
    prenom:{type:'string', require:true},
    telephone:{type:'string', require:true}, 
      
})

const Clients = mongoose.model('clients', ClientsSchema);
export default Clients;