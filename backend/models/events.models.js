import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true
    },
    date: { 
        type: Date, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    createdBy: { 
        type: String,
        ref: 'User', 
        required: true 
    },
    attendees: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ],
    capacity: { 
        type: Number, 
        default: null 
    },
    membershipRequired: {
        type: String,
        enum: ["None", "Level1", "Level2", "Level3"],
        default: "None",
    }
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;