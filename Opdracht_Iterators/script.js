/* var colours = ["Yellow", "Green", "Blue", "Red"];
var i = 0;
while (i < colours.length) {
    console.log(colours[i]);
    i++;
} */

/* var colours = ["Yellow", "Green", "Blue", "Red"];
for (let i = 0; i < colours.length;) {
    console.log(colours[i]);
    i++;
} */
/* 
const colours = ["Yellow", "Green", "Blue", "Red"];
colours.forEach(element => console.log(element));

 */

const objectNaam = { a: "yellow", b: "green", c: "purple" };

for (const property in objectNaam) {
    console.log(`${property}: ${objectNaam[property]}`);
}
