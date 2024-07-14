



import Commande from "../model/Commande.js";



export async function AfficherListesDesCommandes(req,res){
    const listeDesCommandes = await Commande.find(req.body);
    res.send(listeDesCommandes);
}



export async function SupprimerUneCommande(req,res){


    const {id} = req.params; 
    const SupprimerUneCommande = await Commande.findByIdAndDelete(id);
    if (!SupprimerUneCommande) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('commande supprime avec succes');
}




export async function CreerDesCommandes(req,res){
    const CreationCommandes = await Commande.create(req.body);
    res.send(CreationCommandes);
}






