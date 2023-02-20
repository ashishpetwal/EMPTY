const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.pcpgnho.mongodb.net/?retryWrites=true&w=majority`);
}

module.exports = main;