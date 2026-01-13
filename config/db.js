import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongodb ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
