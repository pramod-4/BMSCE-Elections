const Voter=require('../models/voter.js')
const getAllVoters=async(req,res)=>{
    try {
        const voters = await Voter.find({});
    
        if (!voters || voters.length === 0) {
          return res.status(404).json({ message: 'No voters found' });
        }
    
        res.status(200).json(voters);
      } catch (error) {
        console.error('Error fetching voters:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const addVoter=async (req,res)=>{
  try {
    if(req.body.vpass1===req.body.vpass2)
    {
      const existingVoter = await Voter.findOne({ usn: req.body.vusn });
    if (existingVoter) {
      return res.status(400).send("<script>alert('You are already registered... Please login!!');</script>");
    }
      const newVoter= new Voter({
        usn:req.body.vusn ,
        password:req.body.vpass1,
        confirmpass:req.body.vpass2,
        voted:false
      })
      const nv = await newVoter.save();
      res.send(`
      <script>
      window.location.href = '/';
      alert('You have successfully registered!');
    </script>
      `);
    }
    else
    {
      res.send(`
      <script>
      window.location.href = '/';
      alert('Passwords are not matching');
    </script>
      `);
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

const getVoter=async (req,res)=>{
    const usn=req.params.usn
    try {
        const voter = await Voter.findOne({ usn });
    
        if (!voter) {
          return res.status(404).json({ message: 'Voter not found' });
        }
    
        res.status(200).json(voter);
      } catch (error) {
        console.error('Error searching for voter:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const updateVoter=(req,res)=>{
    res.send('Update')
}

const deleteVoter=async (req,res)=>{
    const usn = req.params.usn;

  try {
    const voter = await Voter.findOneAndDelete({ usn });

    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }

    res.status(200).json({ message: 'Voter deleted successfully' });
  } catch (error) {
    console.error('Error deleting voter:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



module.exports={getAllVoters,addVoter,getVoter,updateVoter,deleteVoter}