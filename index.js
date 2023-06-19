const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./src/routes/user.router');
dotenv.config();

// CONSTANTS
const { PORT, } = process.env
const app = express();
const port = PORT || 3000;
const uri = "mongodb+srv://layenull:AXuVDFHKeL3ou7TN@cluster0.pprdbyb.mongodb.net/?retryWrites=true&w=majority";
// setup db connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


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
