// const { error } = require("console");
const mongoose=require("mongoose");
require("dotenv").config();
const connectDb=()=>{
    mongoose.connect(process.env.DATABASE_URL
        ,{
            useNewUrlParser:true,
    useUnifiedTopology:true}
        )
    .then(()=>{
        console.log('Database connect successfully');
    }

    )
    .catch((error)=>{
        console.log("Database connection error");
        console.error(error)
        exit(1);

    })

    
}

module.exports= connectDb;

