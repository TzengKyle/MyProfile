import mongoose from "mongoose";

const connectMongoDB = async (dbName) => {
    try {
        const db = await mongoose.createConnection(
            `mongodb+srv://kyletzeng0514:KYLETZENG0514@cluster0.tc0rlrw.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB.");
        return db;

    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;