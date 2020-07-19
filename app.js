const express = require("express");
const app = express();
const port = 3000;
const patientRouter = require("./routes/patientRoutes");
const cors = require("cors");

app.use(cors());
app.listen(port, () =>
  console.log(`Medfile server is running at http://localhost:${port}`)
);

app.use("/api/Patients", patientRouter);
