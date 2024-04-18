const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, '../ce/public/images/candidates');
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })
const Candidate = require('../models/Candidate')
const getAllCandis = async (req, res) => {
  try {
    const candidates = await Candidate.find({});

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}

const addCandi = async (req, res) => {
  const formIdentifier = req.body.formIdentifier;
  if (formIdentifier === 'form1') {
    try {
      if (req.body.cpass1 === req.body.cpass2) {
        const existingVoter = await Candidate.findOne({ usn: req.body.cusn });
        if (existingVoter) {
          return res.status(400).send("<script> window.location.href = '/';alert('You are already registered... Please login!!');</script>");
        }
        const lastCandidate = await Candidate.findOne({}, {}, { sort: { 'candiId': -1 } });

        let candidateNumber = 1;
        if (lastCandidate) {
          const lastCandiId = lastCandidate.candiId;
          candidateNumber = parseInt(lastCandiId.substring(3)) + 1;
        }
        const gencandiId = `BMS${String(candidateNumber).padStart(3, '0')}`;

        const newVoter = new Candidate({
          usn: req.body.cusn,
          password: req.body.cpass1,
          candiId: gencandiId

        })
        const nv = await newVoter.save();
        res.send(`
        <script>
        window.location.href = '/';
        alert('You have successfully registered! \\nYour Candidate ID is: ${gencandiId}');
      </script>
        `);
      }
      else {
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
  else {
    try {
      
      new Promise((resolve, reject) => {
        upload.single('cimg')(req, res, (err) => {
          if (err) {
            // Handle upload error
            return res.status(400).json({ error: err.message });
          }
          resolve();
        });
      })
      .then(async () => {
        // Inside the then block, you can access req.body and req.file
        console.log(req.body);
        console.log(req.file);

        // Assume candiId is passed in req.body for updating an existing candidate
        const candiId = req.body.formIdentifier;

        // Fetch the existing candidate from the database
        const candidate = await Candidate.findOne({ candiId });

        if (!candidate) {
          return res.status(404).send("Candidate not found");
        }
        

      
      candidate.fname = req.body.cfname;
      candidate.lname = req.body.clname;
      candidate.gender = req.body.gender;
      candidate.age = req.body.age;
      candidate.department = req.body.cdept;
      candidate.semester = req.body.sem;
      candidate.pos = req.body.csub;
      candidate.email = req.body.cmail;
      candidate.image = req.file.originalname; 
      candidate.quote = req.body.quote;
      candidate.about = req.body.about;
      candidate.skills = req.body.skills.split(',').map(skill => skill.trim()); // Split skills by comma and trim whitespace
      
      // Save the updated candidate
      const updatedCandidate = await candidate.save();
      console.log(updatedCandidate);
      res.send(`
          <script>
            alert('Your portfolio updated successfully');
          </script>
        `);
      

        
        
      
        
        
      });
      
      
       
      
      




    } catch (error) {
      // Handle other errors
      res.status(500).send('Internal Server Error');
    }
  }
}

const getCandi = async (req, res) => {
  const candiId = req.params.cid
  try {
    const candidate = await Candidate.findOne({ candiId });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(candidate);
  } catch (error) {
    console.error('Error searching for candidate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getCandibyPos = async (req, res) => {
  const pos = req.params.pos
  try {
    const candidate = await Candidate.find({ pos });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(candidate);
  } catch (error) {
    console.error('Error searching for candidate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const updateCandi = async (req, res) => {
  const candiId = req.params.cid
  const updateData = req.body
  try {
    const candidate = await Candidate.findOneAndUpdate({ candiId }, updateData, { new: true });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(candidate);
  } catch (error) {
    console.error('Error searching for candidate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const deleteCandi = async (req, res) => {
  const candiId = req.params.cid;

  try {
    const candidate = await Candidate.findOneAndDelete({ candiId });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    console.error('Error deleting candidate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



module.exports = { getAllCandis, addCandi, getCandi, updateCandi, deleteCandi, getCandibyPos }