

import mongoose from "mongoose";


let PersonnelsSchema = new mongoose.Schema({
    nom:{type:'string', require:true},
    prenom:{type:'string', require:true},
    telephone:{type:'string', require:true},
    photo:{type:'string', require:true},
    role: {type:'string', require:true},
    age:{type:'string', require:true},
})

const Personnels = mongoose.model('personnels', PersonnelsSchema);
export default Personnels;



