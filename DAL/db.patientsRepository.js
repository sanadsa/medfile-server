const sql = require("mssql");
const config = require("../settingsTemplate/dbConfig");
const dbPool = new sql.ConnectionPool(config, (err) => {
  if (err) {
    console.log("dbPool Error: " + err);
  }
});

class DBCourseRepository {
  getAllPatients() {
    return dbPool
      .request()
      .execute("spPatients_GetAll")
      .then((res) => {
        return res.recordset;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addPatient(patient) {
    console.log(patient);
    let request = dbPool.request();
    request.input("gender", sql.NVarChar(50), patient.gender);
    request.input("birth", sql.Date, patient.birth);
    request.input("age", sql.Int, patient.age);
    request.input(
      "HealthInsuranceCompany",
      sql.NVarChar(50),
      patient.HealthInsuranceCompany
    );
    request.input("PolicyNumber", sql.Int, patient.PolicyNumber);
    request.input("validUntil", sql.Date, patient.validUntil);
    request.input("MobileNum", sql.NVarChar(50), patient.MobileNum);
    request.input("FaxNum", sql.NVarChar(50), patient.FaxNum);
    request.input("EmailAddress", sql.NVarChar(50), patient.EmailAddress);
    request.input("Country", sql.NVarChar(50), patient.Country);
    request.input("city", sql.NVarChar(50), patient.city);
    request.input("Address", sql.NVarChar(50), patient.Address);
    request.input("zipCode", sql.Int, patient.zipCode);
    request.input("ID", sql.Int, patient.ID);

    return request
      .execute("spPatient_Insert")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
  // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
  addDemo(demoDetails) {
    console.log(demoDetails);
    let request = dbPool.request();
    request.input("ID", sql.Int, demoDetails.ID);
    request.input("fNAME", sql.NVarChar(50), demoDetails.fName);
    request.input("lNAME", sql.NVarChar(50), demoDetails.lName);

    return request
      .execute("spDemo_Insert")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  /* getAllProcedures() {
    return dbPool
      .request()
      .execute("spProcedures_GetAll")
      .then((res) => {
        return res.recordset;
      })
      .catch((err) => {
        console.log(err);
      });
  } */
}

module.exports = new DBCourseRepository();
