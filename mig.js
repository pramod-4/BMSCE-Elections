const mongoose = require('mongoose');
const Candidate = require('./path/to/your/model');

const connectDB = async (url) => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(url);

        console.log('Connected to MongoDB');

        // Update existing documents to include votes field
        await Candidate.updateMany({}, { $set: { votes: 0 } });

        console.log('Documents updated successfully');

        // Disconnect from the database
        await mongoose.disconnect();

        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error occurred:', error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
