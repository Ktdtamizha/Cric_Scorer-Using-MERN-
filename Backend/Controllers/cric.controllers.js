import Team from "../Models/cric.models.js";

export const View = async(req,res) => {
    Team.find({})
    .then(teams => res.json(teams))
    .catch(err => res.json(err))
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
        await team.save();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const Update = async (req,res) => {
        const id = req.params.id;
        Team.findByIdAndUpdate(id,{
            team1: req.body.team1,
            team2: req.body.team2,
            result: req.body.result
           },
           { new: true })
           .then(team => res.json(team))
           .catch((err) => res.json(err));
};

export const Delete = async (req,res) => {
    const id = req.params.id;
    Team.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
};

