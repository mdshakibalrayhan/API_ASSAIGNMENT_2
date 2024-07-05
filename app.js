const searchform = document.querySelector("#searchform");
const searchPlayer = (e) => {
  e.preventDefault();
  const searchTerm = e.target.search.value;
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchTerm}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadAllPlayers(data));
};

const loadAllPlayers = (players) => {
  const allplayers = players.player;
  const playerContainer = document.getElementById("player-container");
  if (allplayers == null) {
    playerContainer.innerHTML = `
      <p class="text-white">No results found!</p>
    `;
  } else {
    playerContainer.innerHTML = allplayers
      .map((players) => {
        const playerjson = JSON.stringify(players);
        return `<div class='card'>
              <div class='card-img-container'>          
               <img  class='card-img' src='${players.strThumb}' alt='${players.strPlayer}'/>
             </div>
             <div class='card-text'>
              
          <p>
            <span class='descriptions'>Name : </span>${players.strPlayer}<br>
            <span class='descriptions'>Nationality : </span>${players.strNationality}<br>
            <span class='descriptions'>Sports : </span>${players.strSport}<br>
             <span class='descriptions'>Team : </span>${players.strTeam}<br>
            <span class='descriptions'>Gender : </span>${players.strGender}<br>
            <span class='descriptions'>Height : </span>${players.strHeight}
          </p>
          <span>Social media:</span>
             <div class="socialmedia"> 
                <a class="media-links" href="${players.strInstagram}">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="hotpink" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                </a>
                <a class="media-links" href="${players.strTwitter}">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="dodgerblue" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg>
                </a>
              <a class="media-links" href="${players.strYoutube}">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
              </a>
             </div>
             <div class='card-buttons'>
                <button
                type="button" onclick ="launchModal('${players.idPlayer}')"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Details</button>
                <button class=' btn btn-secondary' onclick="addToCart('${players.idPlayer}')">Select</button>
             </div>
            </div>
          </div>`;
      })
      .join("");
  }
};
searchform.addEventListener("submit", searchPlayer);

const launchModal = (playerID) => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=
${playerID}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData(data));
};

const loadData = (singlePlayer) => {
  const player = singlePlayer.players;
  const details = document.getElementById("player-details");
  const name = document.getElementById("name");
  for (p of player) {
    name.innerHTML = p.strPlayer;
    details.innerHTML = `
      <div>
        <img class="modal-img" src="${p.strThumb}">
        <h1>Details:</h1>
        <p> 
            <span class='descriptions'>Name : </span>${p.strPlayer}<br>
            <span class='descriptions'>Nationality : </span>${p.strNationality}<br>
            <span class='descriptions'>Sports : </span>${p.strSport}<br>
            <span class='descriptions'>Team : </span>${p.strTeam}<br>
            <span class='descriptions'>Gender : </span>${p.strGender}<br>
            <span class='descriptions'>Height : </span>${p.strHeight}
          </p>
        <p>${p.strDescriptionEN}</p>
      </div>
    `;
  }
};

const removeDetails = () => {
  const details = document.getElementById("player-details");
  const name = document.getElementById("name");
  details.innerHTML = "";
  name.innerHTML = "";
};

const addToCart = (playerId) => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=
${playerId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => loadToCart(data));
};

const loadToCart = (singlePlayer) => {
  const count = document.getElementById("select");
  const player = singlePlayer.players;
  let increment = parseInt(count.innerText);
  if (increment >= 11) {
    alert("You have already selected 11 players, you cannot select more!");
  } else {
    increment++;

    const cartContainer = document.getElementById("cart");

    count.innerHTML = increment;
    for (p of player) {
      div = document.createElement("div");
      div.innerHTML = `
      <p class="text-white">${increment}. ${p.strPlayer}</p>
      <hr>
    `;
      cartContainer.appendChild(div);
    }
  }
};

const loadTempPlayers = () => {
  let l = "sanchez";
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${l}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadAllPlayers(data));
};

loadTempPlayers();
