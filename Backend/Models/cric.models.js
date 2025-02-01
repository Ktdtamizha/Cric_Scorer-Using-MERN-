import mongoose from "mongoose";

const CricSchema = mongoose.Schema(
    {
        team1:{
            type:String,
            required : true
        },
        team2:{
            type:String,
            required : true
        },
        result:{
            type:String,
            required : true
        },
        summary:
        {
            type : String,
        }
    }
);

const Team = mongoose.model("Team",CricSchema);

export default Team;

