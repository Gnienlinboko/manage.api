



import Produits from "../model/Produits.js";



export async function AfficherListesDesProduits(req,res){
    const listeDesProduits = await Produits.find(req.body);
    res.send(listeDesProduits);
}




export async function supprimerUnProduit(req,res){


    const {id} = req.params; 
    const supprimerUnProduit = await Produits.findByIdAndDelete(id);
    if (!supprimerUnProduit) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('produit supprime avec succes');
}




export async function CreerUnProduits(req,res){
    const CreationProduits = await Produits.create(req.body);
    res.send(CreationProduits);
}



