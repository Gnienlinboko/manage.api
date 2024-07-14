

import Personnels from "../model/Personnels.js";



export async function AfficherListeDesPersonnels(req,res){
    const listeDesPersonnels = await Personnels.find(req.body);
    res.send(listeDesPersonnels);
}


export async function supprimerUnPersonnel(req,res){


    const {id} = req.params; 
    const supprimerUnPersonnel = await Personnels.findByIdAndDelete(id);
    if (!supprimerUnPersonn) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('personnel supprime avec succes');
}

export async function CreerUnPersonnels(req,res){
    const CreationPersonnels = await Personnels.create(req.body);
    res.send(CreationPersonnels);
}









