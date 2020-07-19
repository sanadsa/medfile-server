const db = require("../DAL/db.patientsRepository");

class PatientsController {
  // Get Patients
  getAllPatients() {
    return db.getAllPatients();
  }

  // Add patient to the list
  addPatient(patient) {
    return db.addPatient(patient);
  }

  addDemo(demoDetails) {
    return db.addDemo(demoDetails);
  }

  // Get Procedures
  getAllProcedures() {
    return db.getAllProcedures();
  }
}

module.exports = new PatientsController();

getAllProcedures;
