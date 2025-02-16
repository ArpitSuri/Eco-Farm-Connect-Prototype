import Admin from './models/userModel.js';
import dbConnection from './utils/dbConnection.js';
const adminRegistration = async () => {
    dbConnection();
    try {
        const AdminInfo= new Admin({
            name:"admin",
            email:"admin@gmail.com",
            password:"admin",
            role:"admin"
        });
        await AdminInfo.save();
        console.log(`admin login successfully`);
        
    } catch (error) {
        console.log(`error occured while registering admin ${error}`);
        
    }
}
adminRegistration();