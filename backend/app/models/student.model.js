module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    birthDate: {
      type: Sequelize.DATEONLY,
    },
  });
  return Student;
};
