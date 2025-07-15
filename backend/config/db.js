
import { DB_NAME } from '../constants.js';
import { connect } from 'mongoose';
const ConnectDB = async () => {
    try {
        const res=await connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`Database connected successfully ${res.connection.host}`);//response from mongoose connect
            
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
};

export {ConnectDB};