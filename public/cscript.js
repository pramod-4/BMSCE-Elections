var ele;
var ele1;

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the 'sep1' class
var sep1Elements = document.querySelectorAll(".sep1");
    
// Add a click event listener to each sep1 element
sep1Elements.forEach(function(sep1) {
    sep1.addEventListener("click", function() {
        // Remove the 'clicked' class from all sep1 elements
        sep1Elements.forEach(function(element) {
            if (element !== sep1) {
                element.classList.remove("clicked");
            }
        });

        // Toggle the 'clicked' class for the clicked sep1 element
        sep1.classList.toggle("clicked");
    });
});
ele = document.querySelector('.main');
ele1 = document.querySelector('.port');
});

function def()
{
    ele.innerHTML=`<div class="animation">
    <br>
    <div class="wrapper">
        <div class="typing-demo">
          <code style="font-size: 50px; ">Hello  ${fname}!!</code>
        </div>
    </div>
    
</div>
<p><b>Welcome to the spotlight, where your journey to shaping BMSCE's future begins! 🚀</b></p>
<div class="leftalign">
    <p>This is your platform to shine, to showcase what makes you tick, what fires you up, and why you're the perfect fit to lead the charge.
        <br><br>
        So, buckle up and let's dive in! Share your story, flaunt those talents, and lay out your vision for our awesome institution.
        <br>
        This is your chance to make waves, to inspire change, and to leave your mark on BMSCE's legacy.
        <br><br>
        Ready to rock the vote? Hit that button below, upload your portfolio, and let's kickstart this electrifying journey together!</p>

</div>
<br>
<div class="cen" onclick="uportf()"><p id="up"><b>Upload Portfolio</b></p></div>`
}

function generatePosition(position, desc, candidates) {
    // let person = {
    //     candId: "bms1001",
    //     fname: "asdfasd",
    // };
    // ${candidates.map(candidates)}
    return `
        <div class="imgc">
            <img src="images/candsym/${position}.png" id="ii" alt="err">
            <p><b>${position}</b></p>
        </div>
        <p class="center"><i>"${desc}"</i></p>
        <div class="grid">
            ${candidates.map(candidate => 
                 `
            <div class="snippet" onclick="generatePortfolio('${candidate.candiId}')">
                    <div>
                        <img src="images/candidates/${candidate.image}" alt="" height="20%" width="20%">
                    </div>
                    <div>
                        <p>${candidate.fname} ${candidate.lname}</p>
                        <p style="margin-top: -15px;">${candidate.semester} Sem</p>
                    </div>
                </div>
            `).join('')
            }
        </div>
    `;
}

function uportf()
{
    ele.innerHTML=`
    <div class="reg">
                    <div class="cform">
                        <form action="/api/v1/candidates" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="formIdentifier" value="${candiId}">
                            <h3>Upload Portfolio</h3>
                            <div class="regrid">
                                <div class="sepf">
                                    <div>
                                        <label for="cfname">First name:</label><br>
                                        <input type="text" name="cfname" id="cfname" class="input">
                                    </div>
                                    <div>
                                        <label for="gen">Gender:</label>
                                        <br>
                                        <input type="radio" name="gender" id="male" value="Male" style="font-size: 10px;"><label
                                            for="male">Male</label>
                                        <input type="radio" name="gender" id="female" value="Female"><label for="female">Female</label>
                                    </div>

                                </div>

                                <div class="sepf">

                                    <div>
                                        <label for="clname">Last name:</label><br>
                                        <input type="text" name="clname" id="clname" class="input">
                                    </div>

                                    <div>
                                        <label for="age"> Age:</label><br>
                                        <input type="number" name="age" id="age" minlength="18" maxlength="22" class="input">
                                    </div>
                                </div>
                                <div class="sepf">
                                    <div>
                                        <div>
                                            <label for="cdept">Department:</label><br>
                                            <input type="text" name="cdept" id="cdept" class="input">
                                        </div>
                                    </div>
                                    <div>
                                        <label for="sem">Semester:</label><br>
                                        <input type="text" name="sem" id="sem" class="input">
                                    </div>
                                    
                                </div>
                                <div>
                                    <label for="csub">Desired Role </label><br>
                                    <select name="csub" id="csub">
                                        <option value="" selected disabled>--Select an Option--</option>
                                        <option value="p">President</option>
                                        <option value="vp">Vice-President</option>
                                        <option value="s">Secretary</option>
                                        <option value="t">Treasurer</option>
                                        <option value="mh">Marketing Head</option>
                                    </select><br>
                                </div>
                                <div>
                                    <label for="cmail">E-Mail:</label><br>
                                    <input type="email" name="cmail" id="cmail" class="input">
                                </div>
                                <div>
                                    <label for="cimg">Upload your profile pic:</label>
                                    <input type="file" name="cimg" id="cimg">
                                </div>
                                <div>
                                    <label for="quote">Your motto:</label><br>
                                    <textarea name="quote" id="q" cols="42" rows="5" placeholder="Give an impactful line!!"></textarea><br><br>
                                </div>
                                <div>
                                    <label for="about">About:</label><br>
                                    <textarea name="about" id="about" cols="42" rows="5" placeholder="Say something about yourself!!"></textarea><br><br>
                                </div>
                                <div>
                                    <label for="skills">Skills:</label><br>
                                    <textarea name="skills" id="skills" cols="42" rows="5" placeholder="Seperated by comma ,"></textarea><br><br>
                                </div>
                            </div>

                            <div class="cen"><button type="submit">Submit</button></div>
                        </form>

                    </div>
                </div>
    `
}

function gen(x) {
    fetch(`/api/v1/candidates/position/${x}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const extractedData = data.map(candidate => {
            return candidate;
        });
        let pos,desc;
        switch(x) {
        case 'p': 
            pos='President';
            desc="Guides the institution's vision, oversees administration, and advocates for the student body's interests.";
            break;
        case 'vp':
            pos = 'Vice-President';
            desc = 'Supports the President, contributes to leadership decisions, and ensures the smooth functioning of the student body.';
            break;
        case 's':
            pos = 'Secretary';
            desc = 'Manages records and administrative tasks to maintain transparency and organizational efficiency.';
            break;
        case 't':
            pos = 'Treasurer';
            desc = 'Oversees finances, manages budgets, and ensures responsible fiscal management for the student government.';
            break;
        case 'mh':
            pos = 'Marketing Head';
            desc = 'Leads marketing efforts, engages and creates a positive and impactful presence for the organization.';
            break;
        // You can add additional cases if needed
        default:
            console.log('Error in switch statement');
         
        }
        ele.innerHTML = generatePosition(pos, desc, extractedData);
        ele.style.backgroundColor = '#FFFFE4';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was a problem fetching data. Please try again later.');
    });
    
}




async function generatePortfolio(id) {
    const response = await fetch(`/api/v1/candidates/${id}`);
    if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const person = await response.json();
    ele.style.backgroundColor = '#171717';
    ele.innerHTML=`
    <div class="portfolio">
        <div class="backarrow">
            <img src="images/ba.webp" alt="arrow" onclick="gen('${person.pos}')">
        </div>
        <div class="banner">
            <img src="images/banner.jpg" alt="" srcset="">
        </div>

        <div class="prof">
            <div class="pimg">
                <img src="images/candidates/${person.image}" alt="" srcset="">
            </div>
            <div class="pname">
                <b>
                    <p>${person.fname} ${person.lname}</p>
                    <p style="margin-top: 2px; font-size:14px">${person.department}</p>
                </b>
            </div>
        </div><br><br><br><br>
        <div class="grid1">
            <div class="column1">
                <div class="biobox">
                    <h2 class="center">BIO</h2><hr><br>
                    <p><b>Gender: </b>${person.gender}</p>
                    <p><b>Age: </b>${person.age}</p>
                    <p><b>Semester: </b>${person.semester}</p>
                </div>
                <br><br>
                <div class="skills">
                    <h2 class="center">SKILLS</h2><b><hr></b>
                    <ul>
                            ${person.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="column1">
                <div class="info">
                    <div class="quote">
                        <p>"${person.quote}"</p>
                    </div>
                    <br>
                    <div class="center">
                        <p>About Me</p>
                    </div>
                    <br>
                    <p class="iinfo">${person.about}</p>
                </div>
            </div>
            <div class="column1">
                <div class="skills">
                    <h2 class="center">Contact Me:</h2><b><hr></b>
                    <p><b>E-Mail:</b> ${person.email}</p>
                </div><br><br>
                <div class="skills">
                    <h2 class="center">Follow me on:</h2><b><hr></b>
                    <div class="grid2">
                        <div><img src="images/insta.png" alt="" srcset="" height="40px"></div>
                        <div><img src="images/fb.png" alt="" srcset="" height="40px"></div>
                        <div><img src="images/x.png" alt="" srcset="" height="40px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    // )
    // .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    //     alert('There was a problem fetching data. Please try again later.');
    // });
}
