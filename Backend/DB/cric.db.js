import mongoose from 'mongoose';

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://kathiravanm116:pVH3DDxkf5fxljl2@nodedb.crcv7.mongodb.net/gully-db?retryWrites=true&w=majority&appName=nodedb")
    .then(() => {
        console.log("successfully connected");
        
    })
    .catch(() => {
        console.log("Connection error");
    })
}

export default connectDb;
