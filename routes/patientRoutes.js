const express = require("express");
const router = express.Router();
const controller = require("../controller/patients");
const asyncHandler = require("../helpers/asyncHandler");
const bodyParser = require("body-parser").json();

router.get(
  "/getPatients",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllPatients();

    res.send(data);
  })
);

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

module.exports = router;
