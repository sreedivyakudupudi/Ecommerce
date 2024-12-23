import mongoose from 'mongoose'
import colors from 'colors'
const ConnectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected sucessfully to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }
    catch (error) {
        console.log(`Error in database connection ${error}`.bgRed.white)
    }
};

export default ConnectDB