# Student Management
This application build with *MERN* stack (**MySQL**, **React**, **Node JS**, **Express**)

# How to start application?
If you want to start application, follow steps
1. Create **MySql** Database (If you haven't MySql server firstly install it, then create a database)
2. To Replace my credentials with yours, please go to `backend/config/mysql.config.js` file
```javascript
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.MYSQL_PASSWORD, // add your password into .env file
  DB: "student_management", // if you create database with other name, replace 'student_management' with that
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

```
3. In ***.env*** file replace demo password with your MySQL server password
```
MYSQL_PASSWORD=demo
```
4. To Start backend,in the root folder of project, run following commands into terminal
```cmd
cd backend
node server.js
```
5. To Start frontend, in the root folder of project,run following commands
```cmd
cd frontend
npm start
```