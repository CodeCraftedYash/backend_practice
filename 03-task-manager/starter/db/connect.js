const mongoose = require('mongoose');
const clientOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  }
};

async function connectDB(url) {
  try {
    const connection = await mongoose.connect(url, clientOptions);
    console.log(`✅ MongoDB connected successfully to: ${connection.connection.host}:${connection.connection.port}`);
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}
module.exports = connectDB;