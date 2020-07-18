const DBConnection = {
  server: "DESKTOP-3G4BSAI\\SQLEXPRESS",
  database: "MedDb",
  user: "afeka",
  password: "afeka",
  options: {
    encrypt: true,
  },
  pool: {
    min: 2,
  },
};

module.exports = DBConnection;
