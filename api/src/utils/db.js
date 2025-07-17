import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
     
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    console.log(PerformanceObserverEntryList.e)
    process.exit(1); // Exit process with failure
  }
};

export {connectDB}