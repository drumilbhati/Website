import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;