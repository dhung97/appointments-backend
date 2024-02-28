const AppointmentSchema = require('../models/appointment');

const getAppointment = async (req, res) => {
    try {
        // const response = await Promise.all([
        //     AppointmentSchema.countDocuments(),
        //     AppointmentSchema.find({ status: true })
        // ]);

        const appointments = await AppointmentSchema.find({ status: true });
        res.status(200).json({status: 200, appointments });

    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to get data');
    }
};

const checkAppointmentExistence = async (req, res) => {
    console.log(req.headers)
    const { query } = req.headers;
    try {
        const appointments = await AppointmentSchema.findOne({ date: query, status: true });
        if(appointments){
            res.status(400).json({status: 400, message: 'A record already exist' });
        }else{
            res.status(200).json({status:200, appointments: false})
        }

    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to get data');
    }
};

const postAppointment = async (req, res) => {
    try {
        const appointmentSchema = new AppointmentSchema(req.body);
        appointmentSchema.status = true;
        await appointmentSchema.save();

        return res.status(201).json({ status: 201, message: 'Record created succesfully' })

    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to register');
    }
};

const putAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const {_id, status, ...data} = req.body;
        const appointment = await AppointmentSchema.findByIdAndUpdate(id, data);
        return res.status(200).json({ status: 200, message: 'Record updated succesfully', appointment });

    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to update the record');
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const {_id, status} = req.body;
        const appointment = await AppointmentSchema.findByIdAndUpdate(id, {status: false});
        return res.status(200).json({ status: 200, message: 'Record deleted succesfully', appointment });

    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to delete the record');
    }
};

module.exports = {
    getAppointment,
    checkAppointmentExistence,
    postAppointment,
    putAppointment,
    deleteAppointment
}