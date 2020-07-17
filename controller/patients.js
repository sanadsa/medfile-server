const db = require("../DAL/db.patientsRepository");

class PatientsController {
  getAllPatients() {
    return db.getAllPatients();
  }

  addPatient(patient) {
    return db.addPatient(patient);
  }
}

module.exports = new PatientsController();
