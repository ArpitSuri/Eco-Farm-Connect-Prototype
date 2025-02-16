
import Industry from './models/industryModel.js';
import dbConnection from './utils/dbConnection.js';
const industryRegistration = async () => {
    dbConnection();
    try {
        const industryInfo= new Industry({
            industryName:"xyz",
            gst_no:"123456789012",
            phone_no:"1234567890",
            email:"industry@gmail.com",
            password:"industry",
            website:"www.xyz.com",
            role:"industry"
        });
        await industryInfo.save();
        console.log(`industry login successfully`);
        
    } catch (error) {
        console.log(`error occured while registering industry ${error}`);
        
    }
}
industryRegistration();