const Facaulty = require('../models/facaulty.model');
const Department = require('../models/department.model');
const { Response } = require('../utils')

module.exports = {
  getAllFacaulty: async (req, res) => {
    const facaulties = await Facaulty.find();

    return Response.success(res, 'Faculties retreived successfully', 200, facaulties);
  },

  getFacaultyDepartments: async (req, res) => {
    const { facaulty_id } = req.body;
    const facaulties = await Department.find({
      facaulty_id
    });

    return Response.success(res, 'Faculties retreived successfully', 200, facaulties);
  }
}
