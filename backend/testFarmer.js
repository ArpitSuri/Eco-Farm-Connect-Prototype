import Farmer from './models/farmerModel.js';
import dbConnection from './utils/dbConnection.js';
const farmerRegistration = async () => {
    dbConnection();
    try {
        const farmerInfo= new Farmer({
            firstname:"arpit",
            lastname:"kumar",
            aadhar_no:"123456789012",
            phone_no:"1234567890",
            email:"farmer@gmail.com",
            password:"famer",
            role:"farmer"
        });
        await farmerInfo.save();
        console.log(`farmer login successfully`);
        
    } catch (error) {
        console.log(`error occured while registering farmer ${error}`);
        
    }
}
farmerRegistration();