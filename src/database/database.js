const mongoose = require('mongoose');

const url = 'mongodb+srv://FiorellaChilcon:Laboratoria@burguer-queen-whdpk.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('db connected!');
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
