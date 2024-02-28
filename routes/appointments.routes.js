const { Router } = require('express');
const { 
    getAppointment, 
    postAppointment, 
    putAppointment, 
    deleteAppointment } = require('../controllers/appointments.controllers');
const { check } = require('express-validator');
const { validate } = require('../middlewares/validators');
const { checkAppointment, checkExistence } = require('../helpers/validators');
const router = Router();

router.get('/', getAppointment);

router.post('/',
[
    check('firstname', 'invalid value on firstname').not().isEmpty(),
    check('lastname', 'invalid value on lastname').not().isEmpty(),
    check('phone', 'invalid value on phone').not().isEmpty(),
    check('date').custom(checkAppointment),
    validate
],
postAppointment);

router.put('/:id', [
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(checkExistence),
    validate
],
putAppointment);

router.delete('/:id',[
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(checkExistence),
    validate
],
deleteAppointment);


module.exports = router;