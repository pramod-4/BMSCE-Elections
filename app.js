const express = require('express')
const path= require('path')
const app=express()
const connectDB=require('./db/connect')
require('dotenv').config()
const candiRoute=require('./routes/candi')
const voterRoute=require('./routes/voter')
const Candidate=require('./models/Candidate')
const Voter=require('./models/voter')
app.set('view engine', 'ejs');


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(express.static(path.join(__dirname, 'public')));




app.use('/api/v1/candidates',candiRoute)
app.use('/api/v1/voters',voterRoute)


app.post('/voter',async(req,res)=>{
    try {
        const uusn=req.body.vusn;
        const ppass=req.body.vpass;
        const voter= await Voter.findOne({usn:uusn});
        if(ppass===voter.password)
        {
            if(ppass==='admin')
            {
                res.status(201).sendFile(path.resolve(__dirname, './public/apage.html'));
            }
            else{
                res.status(201).sendFile(path.resolve(__dirname, './public/vpage.html'));
            }
            
        }
        else{
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
})


app.post('/candidate',async (req,res)=>{
    try {
        const ci=req.body.candiId;
        const ppass=req.body.cpass;
        const candidate= await Candidate.findOne({candiId:ci});
        if(ppass===candidate.password)
        {
            res.status(201).render(path.resolve(__dirname, './public/cpage.ejs'), { fname: candidate.fname, candiId: ci });


        }
        else{
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
})

app.post('/vote',async (req,res)=>{
    try {
        
        const candidateVotes=req.body;
        console.log(candidateVotes);
        for (const position in candidateVotes) {
            const candidateId = candidateVotes[position];
            console.log(candidateId);
            // Find the candidate by ID and update their vote count
            const candidate = await Candidate.findOne({ candiId: candidateId });

// Check if the candidate exists
if (!candidate) {
    return res.status(404).json({ error: 'Candidate not found' });
}

// Increment the votes count
candidate.votes += 1;

// Save the updated candidate
await candidate.save();
res.send(`<script>alert('Voted Successfully!!!');</script>`);


        }

    } catch (error) {
        console.log(error);
    }
})


app.get('/results', async (req, res) => {
    try {
        const results = [];
        const positions = ['p', 'vp', 't', 's', 'mh'];
        for (const position of positions) {
            const maxCandidate = await Candidate.findOne({ pos: position }).sort({ votes: -1 }).limit(1);

            // Push the result to the array
            results.push({
                position: position,
                candidate: maxCandidate ? `${maxCandidate.fname} ${maxCandidate.lname}` : 'No candidate found', // Handle case where no candidate is found
                votes: maxCandidate ? maxCandidate.votes : 0 // Default to 0 votes if no candidate is found
            });
        }
        let winnersMessage = 'Winners:\n';
        results.forEach(result => {
            let position;
            switch(result.position){
                case 'p':position='President';
                        break;
                case 'vp': position='Vice-President'
                            break;
                case 's': position='Secretary'
                            break;
                case 't': position='Treasurer'
                            break;
                case 'mh': position='Marketing Head'
                            break;
            }
            winnersMessage += `${position}: ${result.candidate}\n`;
        });
        // Send the results as JSON
        res.send(winnersMessage);
    } catch (err) {
        console.error('Error fetching results:', err);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/reset',async(req,res)=>{
    try {
        // Update all candidates' votes to 0
        await Candidate.updateMany({}, { votes: 0 });

        res.status(200).send('Votes reset successfully.');
    } catch (err) {
        console.error('Error resetting votes:', err);
        res.status(500).send('Internal Server Error');
    }
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1> Not Found </h1>')
})

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
    app.listen(5000,()=>{
        console.log('Listening to port 5000...');
    })
    } catch (error) {
        console.log(error);
    }
    
}

start()
