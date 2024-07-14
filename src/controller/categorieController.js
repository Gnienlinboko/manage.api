


import Categorie from "../model/Categorie.js";




export async function AfficherListesDesCategories(req,res){
    const listeDesCategories = await Categorie.find(req.body);
    res.send(listeDesCategories);
}



export async function SupprimerCategories(req,res){


    const {id} = req.params; 
    const SupprimerCategories = await Categorie.findByIdAndDelete(id);
    if (!SupprimerCategories) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('categories supprime avec succes');
}






export async function CreerCategories(req,res){
    const CreationCategories = await Categorie.create(req.body);
    res.send(CreationCategories);
}

