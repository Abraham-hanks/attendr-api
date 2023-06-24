const express = require('express');
const FacaultyService = require('../services/facaulty.service');
const router = express.Router();

router.get('/facaulty', FacaultyService.getAllFacaulty);
router.get('/facaulty/department', FacaultyService.getFacaultyDepartments);

module.exports = router;
