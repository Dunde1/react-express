const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const { sequelize } = require("./database");

const indexRouter = require("./routes/index");

const app = express();

sequelize.sync({ force: process.env.TABLE === "clear" })
    .then(() => {
        console.log("데이터베이스 연결 성공!");
    })
    .catch((err) => {
        console.error(err);
    });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

app.use("/", indexRouter);

module.exports = app;
