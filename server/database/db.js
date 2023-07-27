import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGODB_URI = `mongodb+srv://mathpalharshita45:harshi04@file-sharing.3zfebd2.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.log('Error while connecting with the database ',error.message);
    }
}

export default DBConnection;