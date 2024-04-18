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

function admin()
{
    ele.innerHTML=`<h1 class="cen">Admin Panel</h2>
    <br><br>
<form action="/results" method="get" class="voteform">
    <div class="cen">
        <button type="submit" id="vs">Results </button>
    </div><br><br>
</form>
<form action="/reset" method="post" class="voteform">
    <div class="cen">
        <button type="submit" id="vs">Reset </button>
    </div>
</form>
    `
}
async function displayresults()
{
    const results = await fetch("/results");
    const data = await results.text();
    const a= document.getElementById('results');
    a.innerHTML = data;
}

function def()
{
    ele.innerHTML=`<div class="animation">
    <br>
    <div class="wrapper">
        <div class="typing-demo">
          <code style="font-size: 50px; ">Hello Voters!!</code>
        </div>
    </div>
    
</div>
<br>
<p><b>Explore and choose the leaders who will shape the future of our institution!</b></p>
<div class="leftalign">
    <p>Get ready for the rollercoaster ride of BMSCE Elections! Navigate through the quirky profiles of our candidates by clicking on the left-side navigation bar. It's like choosing characters for the greatest show on campus – your votes are the VIP tickets!</p>
<p>Pro Tips for picking the right candidate:
<ul>
    <li>Look beyond the campaign slogans – it's not a rap battle!</li>
    <li>Consider their unique talents; we're not scouting for a talent show, but it helps!</li>
    <li>Keep in mind the candidate's vision for the institution – spoiler alert: we're aiming for a bright future!</li>
</ul>
</p>
<div class="cen" onclick="vote()"><p id="up"><b>Vote Now!</b></p></div>
</div>`
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

function vote()
{
    ele.innerHTML=`
    <h1 class="cen">Cast your vote!!</h2>
                    <br><br>
                <form action="/vote" method="post" class="voteform">
                    <div class="gridv">
                        <div class="lefttt">
                            <div>
                                <label for="p">President</label><br>
                                <label for="vp">Vice-President</label><br>
                                <label for="t">Treasurer</label><br>
                                <label for="s">Secretary</label><br>
                                <label for="mh">Marketing Head</label><br>
                            </div>
                        </div>
                        <div class="righttt">
                            <select name="p" id="p">
                                <option value="" selected>-Select-</option>
                            </select><br>
                            <select name="vp" id="vp">
                                <option value="" selected>-Select-</option>
                            </select><br>
                        
                            <select name="t" id="t">
                                <option value="" selected>-Select-</option>
                            </select><br>
                        
                            <select name="s" id="s">
                                <option value="" selected>-Select-</option>
                            </select><br>
                        
                            <select name="mh" id="mh">
                                <option value="" selected>-Select-</option>
                            </select><br>
                        </div>
                    </div>
                    <br><br><br>
                    <div class="cen">
                        <button type="submit" id="vs">Submit your votes </button>
                    </div>
                </form>`
                fetch();
                
}

    fetch('/api/v1/candidates/position/p')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('p');

                // Populate the select dropdown with options fetched from the API
                data.forEach(candidate => {
                    const option = document.createElement('option');
                    option.value = candidate.candiId; // Assuming each candidate has an id property
                    option.textContent = candidate.fname+" "+candidate.lname; // Assuming each candidate has a name property
                    selectElement.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });

fetch('/api/v1/candidates/position/vp')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('vp');

                // Populate the select dropdown with options fetched from the API
                data.forEach(candidate => {
                    const option = document.createElement('option');
                    option.value = candidate.candiId; // Assuming each candidate has an id property
                    option.textContent = candidate.fname+" "+candidate.lname; // Assuming each candidate has a name property
                    selectElement.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });            
fetch('/api/v1/candidates/position/s')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('s');

                // Populate the select dropdown with options fetched from the API
                data.forEach(candidate => {
                    const option = document.createElement('option');
                    option.value = candidate.candiId; // Assuming each candidate has an id property
                    option.textContent = candidate.fname+" "+candidate.lname; // Assuming each candidate has a name property
                    selectElement.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });

            fetch('/api/v1/candidates/position/t')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('t');

                // Populate the select dropdown with options fetched from the API
                data.forEach(candidate => {
                    const option = document.createElement('option');
                    option.value = candidate.candiId; // Assuming each candidate has an id property
                    option.textContent = candidate.fname+" "+candidate.lname; // Assuming each candidate has a name property
                    selectElement.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });
            fetch('/api/v1/candidates/position/mh')
            .then(response => response.json())
            .then(data => {
                const selectElement = document.getElementById('mh');

                // Populate the select dropdown with options fetched from the API
                data.forEach(candidate => {
                    const option = document.createElement('option');
                    option.value = candidate.candiId; // Assuming each candidate has an id property
                    option.textContent = candidate.fname+" "+candidate.lname; // Assuming each candidate has a name property
                    selectElement.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });


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
