



import mongoose from "mongoose";


let StockSchema = new mongoose.Schema({
    nom:{type:'string', require:true},
    quantite:{type:'number', require:true},  
})

const Stock = mongoose.model('stock', StockSchema);
export default Stock;