const AppointmentSchema = require('../models/appointment');

const checkAppointment = async(date = '') => {
    const exist = await AppointmentSchema.findOne({ date: date, status: true});
    if(exist){
        throw new Error('The record already exist');
    }
};

const checkExistence = async(id) => {
    const exist = await AppointmentSchema.findById(id);
    if(!exist){
        throw new Error('The Id does not exist');
    }
};

module.exports = {
    checkAppointment,
    checkExistence
}