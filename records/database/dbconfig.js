import mongoose from "mongoose";

const connect = async() =>{
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/dhanvantari",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: false
        });
        console.log("successfully connected to database.");
    } catch (error) {
        console.log(error);
        console.log("Error while connecting to database.");
    }
}

export default connect;