console.log("Hi");

let wert = window.prompt("Schätzen Sie eine Nummer zwischen 1-10", "");
console.log(wert);
let comWert = Math.floor(Math.random() * 10) + 1;
console.log(comWert);

if (wert === comWert) {
    console.log("Du hast richtig geschätzt! Glückwunsch!");
} else {
    console.log(`${"Leider hast du falsch geschätzt! Die Nummer war:"} ${comWert}${". Versuche es noch einmal!"}`);
}