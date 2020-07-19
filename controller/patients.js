const db = require("../DAL/db.patientsRepository");

class PatientsController {
  getAllPatients() {
    return db.getAllPatients();
  }

  addPatient(patient) {
    return db.addPatient(patient);
  }

  addDemo(demoDetails) {
    return db.addDemo(demoDetails);
  }
}

module.exports = new PatientsController();
