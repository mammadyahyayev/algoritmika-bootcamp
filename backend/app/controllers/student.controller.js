const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name cannot be empty",
    });
    return;
  }

  const student = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    birthDate: req.body.birthDate,
  };
  
  Student.create(student)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Student.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Students.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Student.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Student with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Student with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Student.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Student with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Student.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Student.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} students were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all students.",
      });
    });
};
