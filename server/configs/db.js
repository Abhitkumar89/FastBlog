import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connection.on("error", (err) =>
      console.error("MongoDB connection error:", err)
    );
    // Get MongoDB URI from environment variables
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is required");
    }
    
    const dbName = mongoUri.includes('?') ? mongoUri : `${mongoUri}/quickblog`;
    
    await mongoose.connect(dbName, {
      serverSelectionTimeoutMS: 10000, // 10 seconds
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
