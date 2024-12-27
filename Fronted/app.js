const name = document.getElementById("name");
const age = document.getElementById("age");
const photoUrl = document.getElementById("photoUrl");
const birthplace = document.getElementById("birthplace");
const numberOfMatches = document.getElementById("numberOfMatches");
const career = document.getElementById("career");
const score = document.getElementById("score");
const fifties = document.getElementById("fifties");
const centuries = document.getElementById("centuries");
const wickets = document.getElementById("wickets");
const average = document.getElementById("average");
const searchInput = document.getElementById("search");
const submitBtn = document.querySelector(".btn-submit")
const searchBtn = document.querySelector(".btn-search");

let arr =[]

function editData(){
    name.value = arr.name;
    age.value = arr.age;
    photoUrl.value = arr.photourl;
    birthplace.value = arr.birthplace;
    numberOfMatches.value = arr.numberofmatches;
    career.value = arr.career;
    score.value = arr.score;
    fifties.value = arr.fifties;
    centuries.value = arr.centuries;
    wickets.value = arr.wickets;
    average.value = arr.average;
    submitBtn.innerText = "update"
}

function renderDataInHTML(player){
    const resultsContainer = document.getElementById("results");
    let playerDiv =''
    playerDiv += `
          <button class="btn btn-primary" onclick="editData()">Edit</button>
          <strong>Name:</strong> ${player.name}<br>
          <strong>Age:</strong> ${player.age}<br>
          <strong>Photo:</strong> <img src="${player.photourl}" alt="Player photo" style="width: 50px; height: 50px; border-radius: 50%;"><br>
          <strong>Birthplace:</strong> ${player.birthplace}<br>
          <strong>Matches:</strong> ${player.numberofmatches}<br>
          <strong>Career:</strong> ${player.career}<br>
          <strong>Score:</strong> ${player.score}<br>
          <strong>Fifties:</strong> ${player.fifties}<br>
          <strong>Centuries:</strong> ${player.centuries}<br>
          <strong>Wickets:</strong> ${player.wickets}<br>
          <strong>Average:</strong> ${player.average}
        `;
    resultsContainer.innerHTML = playerDiv;
}


function addData() {
  const player = {
    name: name.value,
    age: age.value,
    photourl: photoUrl.value,
    birthplace: birthplace.value,
    numberofmatches: numberOfMatches.value,
    career: career.value,
    score: score.value,
    fifties: fifties.value,
    centuries: centuries.value,
    wickets: wickets.value,
    average: average.value,
  };

  axios
    .post("http://localhost:3000/add-player", player)
    .then((res) => {
      alert("Data add successfully");
      name.value = "";
      age.value = "";
      photoUrl.value = "";
      birthplace.value = "";
      numberOfMatches.value = "";
      career.value = "";
      score.value = "";
      fifties.value = "";
      centuries.value = "";
      wickets.value = "";
      average.value = "";
    })
    .catch((err) => {
      console.log(err);
    });

}

function getDetails() {
  axios
    .post("http://localhost:3000/find-player", {
      name: searchInput.value.trim(),
    })
    .then((res) => {
        if(res.data!=null){
            renderDataInHTML(res.data)
            arr = res.data;
        }
        console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateData(){
    const player = {
        id :arr.id,
        name: name.value,
        age: age.value,
        photourl: photoUrl.value,
        birthplace: birthplace.value,
        numberofmatches: numberOfMatches.value,
        career: career.value,
        score: score.value,
        fifties: fifties.value,
        centuries: centuries.value,
        wickets: wickets.value,
        average: average.value,
      };
    
      axios
        .post("http://localhost:3000/update-player", player)
        .then((res) => {
          alert("Data updated successfully");
          name.value = "";
          age.value = "";
          photoUrl.value = "";
          birthplace.value = "";
          numberOfMatches.value = "";
          career.value = "";
          score.value = "";
          fifties.value = "";
          centuries.value = "";
          wickets.value = "";
          average.value = "";
        })
        .catch((err) => {
          console.log(err);
        });
        submitBtn.innerText = "submit"
      alert("Player updated successfully!");
}

searchBtn.addEventListener("click",(e)=>{
    getDetails();
})

submitBtn.addEventListener("click",(e)=>{
    if(e.target.innerText=="update"){
      updateData()
    }else{
        addData()
    }
})

document.getElementById("playerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const player = {
    name: name.value,
    age: age.value,
    photourl: photoUrl.value,
    birthplace: birthplace.value,
    numberofmatches: numberOfMatches.value,
    career: career.value,
    score: score.value,
    fifties: fifties.value,
    centuries: centuries.value,
    wickets: wickets.value,
    average: average.value,
  };

  axios
    .post("http://localhost:3000/add-player", player)
    .then((res) => {
      alert("Data add successfully");
      name.value = "";
      age.value = "";
      photoUrl.value = "";
      birthplace.value = "";
      numberOfMatches.value = "";
      career.value = "";
      score.value = "";
      fifties.value = "";
      centuries.value = "";
      wickets.value = "";
      average.value = "";
    })
    .catch((err) => {
      console.log(err);
    });

  players.push(player);
  alert("Player added successfully!");
  this.reset();
});

function searchData() {
  const searchQuery = prompt("Enter the name to search:").toLowerCase();
  const resultsContainer = document.getElementById("results");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery)
  );

  resultsContainer.innerHTML = "<h3>Search Results</h3>";

  if (filteredPlayers.length === 0) {
    resultsContainer.innerHTML += "<div>No results found.</div>";
    return;
  }

  filteredPlayers.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.innerHTML = `
          <strong>Name:</strong> ${player.name}<br>
          <strong>Age:</strong> ${player.age}<br>
          <strong>Photo:</strong> <img src="${player.photoUrl}" alt="Player photo" style="width: 50px; height: 50px; border-radius: 50%;"><br>
          <strong>Birthplace:</strong> ${player.birthplace}<br>
          <strong>Matches:</strong> ${player.numberOfMatches}<br>
          <strong>Career:</strong> ${player.career}<br>
          <strong>Score:</strong> ${player.score}<br>
          <strong>Fifties:</strong> ${player.fifties}<br>
          <strong>Centuries:</strong> ${player.centuries}<br>
          <strong>Wickets:</strong> ${player.wickets}<br>
          <strong>Average:</strong> ${player.average}
        `;
    resultsContainer.appendChild(playerDiv);
  });
}
