

import mongoose from "mongoose";


let CommandeSchema = new mongoose.Schema({
    nom_et_prenom_du_client:{type:'string', require:true},
    telephone_du_client:{type:'string', require:true},
    montant_de_la_commande:{type:'number', require:true},
    produits_commande:{type:'string', require:true},
    mongtant_reçu: {type:'number', require:true},
    montant_restant:{type:'number', require:true},
})

const Commande = mongoose.model('commande', CommandeSchema);
export default Commande;



