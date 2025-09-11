import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connection.on("error", (err) =>
      console.error("MongoDB connection error:", err)
    );
    // Add database name to the connection string if not already present
    let mongoUri = process.env.MONGODB_URI;
    
    // Fallback to hardcoded URI if environment variable is not available
    if (!mongoUri) {
      console.log("Using fallback MongoDB URI");
      mongoUri = "mongodb+srv://AbhitKumar_DataBase:Abhit%401234@cluster0.d7vmwgz.mongodb.net";
    }
    
    const dbName = mongoUri.includes('?') ? mongoUri : `${mongoUri}/quickblog`;
    
    await mongoose.connect(dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10 seconds
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
