const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models')
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

require("./app/routes/student.routes")(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
