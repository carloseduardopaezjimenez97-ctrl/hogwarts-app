const API_URL = "https://wizard-world-api.herokuapp.com/Houses";

async function getHouses() {
  try {
    const res = await fetch(API_URL);
    const houses = await res.json();
    renderHouses(houses);
  } catch (err) {
    console.error("Error:", err);
  }
}

function renderHouses(houses) {
  const container = document.getElementById("houses-container");

  container.innerHTML = ""; // limpia por si recarga

  houses.forEach(house => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${house.name}</h2>
      <p><b>Founder:</b> ${house.founder}</p>
      <p><b>Animal:</b> ${house.animal}</p>
      <button onclick="goToDetail('${house.id}')">View Details</button>
    `;

    container.appendChild(card);
  });
}

function goToDetail(id) {
  window.location.href = `house.html?id=${id}`;
}

getHouses();