


import mongoose from "mongoose";


let CategorieSchema = new mongoose.Schema({
    libelle:{type:'string', require:true},
})

const Categorie = mongoose.model('categorie', CategorieSchema);
export default Categorie;


