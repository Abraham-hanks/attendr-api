const express = require('express');
const mongoose = require('mongoose');
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from 'cors';
import * as userRouter from "./src/routes/user.router";

dotenv.config();

// CONSTANTS
const { PORT, } = process.env
const app = express();
const port = PORT || 3000;

// setup db connection

// app setup
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// home route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});
const baseUrl = "/api/v1";
// user route
app.use(`${baseUrl}/user`, userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const status = 404;
  return res.status(status).json({
    success: false,
    statusCode: status,
    message: "Not Found",
  });
});

app.listen(port); 
