

import Fournisseur from "../model/Fournisseur.js";



export async function AfficherListeDesFounisseurs(req,res){
    const listeDesFournisseurs = await Fournisseur.find(req.body);
    res.send(listeDesFournisseurs);
}

export async function SupprimerUnFounisseurs(req,res){


    const {id} = req.params; 
    const supprimerUnFournisseur = await Fournisseur.findByIdAndDelete(id);
    if (!supprimerUnFournisseur) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('fournisseur supprime avec succes');
}

export async function CreerUnFounisseur(req,res){
    const creationFournisseur = await Fournisseur.create(req.body);
    res.send(creationFournisseur);
}

//CRUD//Create /Read/ Update / Delete/



export async function MiseUnFounisseurs(req,res){


    const {id} = req.params; 
    const supprimerUnFournisseur = await Fournisseur.findByIdAndDelete(id);
    if (!supprimerUnFournisseur) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('fournisseur supprime avec succes'); 
}