import Team from "../Models/cric.models.js";

export const View = async(req,res) => {
    Team.find({})
    .then(teams => res.json(teams))
    .catch(err => res.json(err))
};

export const ViewDeatil = async(req,res) => {
    try {
        const teams = await Team.findById(req.params.id);
        res.json(teams);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const Add = async (req,res) => {
    const team = await new Team(
        {
            team1:req.body.team1,
            team2:req.body.team2,
            result:req.body.result,
            summary:req.body.summary
        }
    ) ;
    try {
        team.save();
        res.status(200).json(team);
    } catch (error) {
        res.status({message:error.message});
    }
};

export const Update = async (req,res) => {
    try {
        const team = await Team.findOneAndUpdate({_id: req.params.id},{
            team1: req.body.team1,
            team2: req.body.team2,
            result: req.body.result,
            summary: req.body.summary
           },{
            new : true,
           });
            res.status(200).json(team);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
};

export const Delete = async (req,res) => {
    const id = req.params.id;
    Team.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
};

