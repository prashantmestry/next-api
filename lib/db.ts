import mongoose from "mongoose";
//
const MONGO_URL = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting....");
    return;
  }
  try {
    mongoose.connect(MONGO_URL!, {
      dbName: "Next-Api",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err: any) {
    console.log("Error:", err);
    throw new Error("Error: ", err);
  }
};

export default connect;
