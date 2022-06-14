module.exports = (app) => {
  const students = require("../controllers/student.controller.js");
  var router = require("express").Router();

  router.post("/", students.create);

  router.get("/", students.findAll);

  router.get("/:id", students.findOne);

  router.put("/:id", students.update);

  router.delete("/:id", students.delete);

  router.delete("/", students.deleteAll);

  app.use("/api/students", router);
};
