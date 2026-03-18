const API_URL = "https://wizard-world-api.herokuapp.com/Houses";

function getId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function getHouse() {
  const id = getId();

  if (!id) {
    document.getElementById("house-detail").innerHTML = "No house ID provided";
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`);
    const house = await res.json();
    renderHouse(house);
  } catch (err) {
    console.error("Error:", err);
  }
}

function renderHouse(house) {
  const container = document.getElementById("house-detail");

  container.innerHTML = `
    <h2>${house.name}</h2>
    <p><b>Founder:</b> ${house.founder}</p>
    <p><b>Colors:</b> ${house.houseColours}</p>
    <p><b>Animal:</b> ${house.animal}</p>
    <p><b>Element:</b> ${house.element}</p>
    <p><b>Ghost:</b> ${house.ghost}</p>
    <p><b>Common Room:</b> ${house.commonRoom}</p>

    <h3>Heads</h3>
    <ul>
      ${house.heads.map(h => `<li>${h.firstName} ${h.lastName}</li>`).join("")}
    </ul>

    <h3>Traits</h3>
    <ul>
      ${house.traits.map(t => `<li>${t.name}</li>`).join("")}
    </ul>

    <button onclick="goBack()">Back</button>
  `;
}

function goBack() {
  window.location.href = "index.html";
}

getHouse();