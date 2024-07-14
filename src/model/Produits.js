

import mongoose from "mongoose";


let ProduitsSchema = new mongoose.Schema({
    nom:{type:'string', require:true},
    prix:{type:'number', require:true},
    quantite:{type:'number', require:true}, 
    description:{type:'string', require:true},  
    photo:{type:'string', require:true}, 
})

const Produits = mongoose.model('produits', ProduitsSchema);
export default Produits;