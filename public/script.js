
function showVoterForm()
{
    const loginbar = document.querySelector('.loginbar');
    const hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`
    <br><br>
    <form id="voterLoginForm" action="/voter" method="POST">
    <h2>Login as Voter:</h2>
    <input type="text" id="vusn" name="vusn" placeholder="Enter your USN" required autocomplete="false">
    <br><br>
    <input type="password" id="vpass" name="vpass" placeholder="Password" required>
    <br>
    <p class="back" onclick="voterReg()">Register as Voter</p>
    <button type="submit" class="login">Log In</button>
    <br>
    <p class="back" onclick="defaultLogin()">Back</p>
</form>
    ` 
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Voter</b></p>
                
                <p style="font-size:23px; padding:30px "><b>Explore the profiles of candidates, understand their goals,and cast your <br>vote for the individuals who resonate with your vision for the college.  <br>Your voice matters, and your vote can shape the future of our campus community.</b></p>
                
                <img src="images/voter.png" alt="" srcset="" height="250px" style="margin-left: 290px; margin-top:-50px">
                
    `
    
}
function voterReg()
{
    const loginbar = document.querySelector('.loginbar');
    const hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`
    <br>
    <form id="voterRegForm" action="/api/v1/voters" method="POST">
    <h2>Register as Voter:</h2>
    <input type="text" id="vusn" name="vusn" placeholder="Enter your USN" required autocomplete="false">
    <br><br>
    <input type="password" id="vpass1" name="vpass1" placeholder="Password" required>
    <br><br>
    <input type="password" id="vpass2" name="vpass2" placeholder="Confirm Password" required>
    <br><br>
    <button type="submit" class="login" id="vr">Register</button>
    <br>
    <p class="back" onclick="showVoterForm()">Back</p>
</form>
    ` 
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Voter</b></p>
                
                <p style="font-size:23px; padding:30px "><b>Explore the profiles of candidates, understand their goals,and cast your <br>vote for the individuals who resonate with your vision for the college.  <br>Your voice matters, and your vote can shape the future of our campus community.</b></p>
                
                <img src="images/voter.png" alt="" srcset="" height="250px" style="margin-left: 290px; margin-top:-50px">
                
    `
}
function candiReg()
{
    const loginbar = document.querySelector('.loginbar');
    const hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`
    <br>
    <form id="voterRegForm" action="/api/v1/candidates" method="POST">
    <input type="hidden" name="formIdentifier" value="form1">
    <h2>Register as Candidate:</h2>
    <input type="text" id="vusn" name="cusn" placeholder="Enter your USN" required autocomplete="false">
    <br><br>
    <input type="password" id="cpass1" name="cpass1" placeholder="Password" required>
    <br><br>
    <input type="password" id="cpass2" name="cpass2" placeholder="Confirm Password" required>
    <br><br>
    <button type="submit" class="login" id="cr">Register</button>
    <br>
    <p class="back" onclick="showCandidateForm()">Back</p>
</form>
    ` 
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Candidate</b></p>
                
                <p style="font-size:23px; padding:30px; margin-bottom:0px "><b>Are you passionate about making a difference?<br>Consider standing as a candidate! Showcase your leadership skills, <br>share your ideas, and let your fellow students know why you're the right <br>choice to represent them.</b>
                </p>
                <img src="images/candi.png" alt="" srcset="" height="300px" style="margin-left: 290px; margin-top:-30px;">
                
    `
}
function showCandidateForm()
{
    const loginbar = document.querySelector('.loginbar');
    const hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`
    <br><br>
            <form action="/candidate" method="POST">
            <h2>Login as Candidate:</h1>
            
            <input type="text" name="candiId" placeholder="Enter Candidate ID">
            <br><br>
            
            <input type="password"name="cpass" placeholder="Password">
            <br>
            <p class="newreg" onclick="candiReg()">Register As Candidate</p>
            

            <button type="submit" class="login" >Log In</button>
            <br>
            <p class="back" onclick="defaultLogin()">Back</p>
            </form>
    `
    hptext.innerHTML=`
    <br>
                <p style="margin-left: 350px; font-size:29px; margin-bottom:-40px"><b>Be a Candidate</b></p>
                
                <p style="font-size:23px; padding:30px; margin-bottom:0px "><b>Are you passionate about making a difference?<br>Consider standing as a candidate! Showcase your leadership skills, <br>share your ideas, and let your fellow students know why you're the right <br>choice to represent them.</b>
                </p>
                <img src="images/candi.png" alt="" srcset="" height="300px" style="margin-left: 290px; margin-top:-30px;">
                
    `
}
function defaultLogin()
{
    const loginbar = document.querySelector('.loginbar');
    const hptext = document.querySelector('.hptext');
    loginbar.innerHTML=`<br><br><br>
    <p style="font-size:27px;"><b>Choose a Login method</b></p>
    
    <button class="login" onclick="showVoterForm()" style="font-size: 17px;">Login as Voter</button>
    <br><br><br>
    <button class="login" onclick="showCandidateForm()" style="font-size: 17px;">Login as Candidate</button>
    ` 
    hptext.innerHTML=`
    <p style="font-size:23px; padding:30px "><b>Step into the virtual arena of campus elections – where wit, promises,  <br>and votes collide! <br>Your front-row seat to the coolest show on campus awaits. <br><br>Let the digital democracy party begin!</b>
                </p>    
                <br>
                
    `
}