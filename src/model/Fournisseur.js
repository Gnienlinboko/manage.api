

import mongoose from "mongoose";


let FournisseurSchema = new mongoose.Schema({
    libelle:{type:'string', require:true},
    telephone:{type:'string', require:true},
    email:{type:'string', require:false},
})

const Fournisseur = mongoose.model('fournisseur', FournisseurSchema);
export default Fournisseur;