const team1Element = document.getElementById("team-1");

team1Element.addEventListener("click", function () {
    const newTeamName = prompt("Insira o novo nome para Patos do rio:");
    if (newTeamName !== null) {
        team1Element.innerHTML = `<strong>${newTeamName}</strong>`;
    }
});

const team2Element = document.getElementById("team-2");

team2Element.addEventListener("click", function () {
    const newTeamName = prompt("Insira o novo nome para Patos do rio:");
    if (newTeamName !== null) {
        team2Element.innerHTML = `<strong>${newTeamName}</strong>`;
    }
});


const pointTeam1 = document.getElementById("team-1-points");
const b1Minor = document.getElementById("minor-points-1");
const b1Plus = document.getElementById("plus-points-1");

let team1 = 0;
b1Plus.addEventListener("click", () => {
    team1++;
    pointTeam1.innerHTML = team1;
});
b1Minor.addEventListener("click", () => {
    if (team1 > 0) {
        team1--;
        pointTeam1.innerHTML = team1;
    }
});

const pointTeam2 = document.getElementById("team-2-points");
const b2Minor = document.getElementById("minor-points-2");
const b2Plus = document.getElementById("plus-points-2");

let team2 = 0;
b2Plus.addEventListener("click", () => {
    team2++;
    pointTeam2.innerHTML = team2;
});
b2Minor.addEventListener("click", () => {
    if (team2 > 0) {
        team2--;
        pointTeam2.innerHTML = team2;
    }
});
