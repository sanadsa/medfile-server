const express = require("express");
const router = express.Router();
const controller = require("../controller/patients");
const asyncHandler = require("../helpers/asyncHandler");
const bodyParser = require("body-parser").json();

// Get Patients
router.get(
  "/getPatients",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllPatients();

    res.send(data);
  })
);

// Add patient to the list
router.post(
  "/addPatient",
  bodyParser,
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addPatient(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.post(
  "/addDemo",
  bodyParser,
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addDemo(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

// Get Procedures
/* router.get(
  "/getProcedures",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllProcedures();

    res.send(data);
  }) 
); */

module.exports = router;
