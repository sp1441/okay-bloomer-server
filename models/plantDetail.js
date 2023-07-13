const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');



const plantDetailSchema = new mongoose.Schema({
    type: String,
    propagation: [{
        type: String,
    }],
    flowers: Boolean,
    floweringSeason: String,
    soil: [{
        type: String,
    }],
    growthRate: String,
    maintenance: String,
    poisonousHumans: Number,
    poisonousPets: Number,
    invasive: Boolean,
    thorny: Boolean,
    indoor: Boolean,
    careLevel: String,
    pruningMonth: [{
        type: String,
    }],
    pruningCount: {
        amount: Number,
        interval: String,
    },
    plantId: Number,

}, { timestamps: true });

plantDetailSchema.plugin(findOrCreate);



// create model
const PlantDetail = mongoose.model('PlantDetail', plantDetailSchema);



module.exports = PlantDetail;