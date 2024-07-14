



import Clients from "../model/Clients.js";



export async function AfficherListesDesClients(req,res){
    const listeDesClients = await Clients.find(req.body);
    res.send(listeDesClients);
}


export async function supprimerUnClient(req,res){


    const {id} = req.params; 
    const supprimerUnClient = await Clients.findByIdAndDelete(id);
    if (!supprimerUnClient) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('fournisseur supprime avec succes');
}





export async function CreerUnClients(req,res){
    const CreationClients = await Clients.create(req.body);
    res.send(CreationClients);
}