import mongoose from "mongoose";

const connectMongoDB = async (dbName) => {
    try {
        const db = await mongoose.createConnection(
            `${process.env.MONGODB_URI_PRE}${dbName}${process.env.MONGODB_URI_POST}`
            // ,            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB.");
        return db;

    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;