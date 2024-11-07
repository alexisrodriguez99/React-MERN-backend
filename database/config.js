const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        console.log("process.env.DB_CNN °°°°");

        console.log(process.env.DB_CNN);
        console.log(process.env.SECRET_JWT_SEED);

        await mongoose.connect( process.env.DB_CNN 
            , {
            // useNewUrlParser: true, 
            // useUnifiedTopology: true,
            // useCreateIndex: true
        }
    );

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}