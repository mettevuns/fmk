const screen = document.getElementById("screen");

let characters = [
  "Goofy", "Donald Duck", "Mickey Mouse",
  "Captain America", "Iron Man", "Spiderman",
  "Batman", "Superman", "The Flash",
  "Sully", "Mike Wazowski", "Randall Boggs",
  "Mr Incredible", "Elastigirl", "Frozone"
];

function randomTriplet(arr) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function renderRound() {
  const triplet = randomTriplet(characters);
  screen.innerHTML = `
    <h2>Choose: Fuck, Marry, Kill</h2>
    ${triplet.map(name => `
      <div class="character-block">
        <p><strong>${name}</strong></p>
        <select>
          <option value="fuck">Fuck</option>
          <option value="marry">Marry</option>
          <option value="kill">Kill</option>
        </select>
      </div>
    `).join('')}
    <button onclick="renderRound()">Next Round</button>
  `;
}

function startGame() {
  renderRound();
}
