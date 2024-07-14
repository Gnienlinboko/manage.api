



import Stock from "../model/Stocks.js";



export async function AfficherListesDesStocks(req,res){
    const listeDesStocks = await Stock.find(req.body);
    res.send(listeDesStocks);
}


export async function supprimerUnStock(req,res){


    const {id} = req.params; 
    const supprimerUnStock = await Clients.findByIdAndDelete(id);
    if (!supprimerUnStock) {
        return res.status(404).json(`il n'existe pas un fournisseur dont l'id est:${id}`)
    }
    res.status(200).send('Stock supprime avec succes');
}



export async function CreerDesStocks(req,res){
    const CreationStocks = await Stock.create(req.body);
    res.send(CreationStocks);
}
