const { Schema, model } = require('mongoose');


const appointmentSchema = Schema({
    firstname:{
        type: String,
        required: [true, 'invalid value on firstname']
    },
    lastname:{
        type: String,
        required: [true, 'invalid value on lastname']
    },
    phone:{
        type: String,
        required: [true, 'invalid value on phone']
    },
    date:{
        type: String,
        required: [true, 'invalid value on date']
    },
    status:{
        type: Boolean
    }
},
{
    timestamps: true
})
module.exports = model('Appointment', appointmentSchema);