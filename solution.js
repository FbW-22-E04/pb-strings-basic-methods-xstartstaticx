// 1
const parkWalkStr = "I can walk in the park all day!";

const parkStart = parkWalkStr.indexOf("p");
const parkEnd = parkWalkStr.lastIndexOf("k");

console.log(parkWalkStr.substring(parkStart, parkEnd + 1));

// 2
const helloStr = "Hello World";

console.log(helloStr.toUpperCase());

// 3
const earthlingsStr = "Hello Earthling";

console.log(earthlingsStr.toLowerCase());

// 4
const jsStr = "JavaScript";

console.log(jsStr.slice(3, 6));

// 5
const niceShoesStr = "nice shoes";

console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

// 6
const oldStr = "snake";
const firstLetter = oldStr[0];
const newStr = firstLetter + oldStr + firstLetter;

console.log(newStr);

// 7
const scritcherStr = "tiktok";
const lastThreeChars = scritcherStr.slice(-3);

console.log(lastThreeChars + scritcherStr + lastThreeChars);

// 8
const boogieNightsStr = "Kayak";
const boogieStart = boogieNightsStr[0];
const boogieEnd = boogieNightsStr[4];
const midBoogie = boogieNightsStr.slice(1, 4);

console.log(boogieEnd + midBoogie + boogieStart);

// 9
const firstName = "Bartholomeu";
const city = "Transylvania";
const job = "Professional Vampire for the last 15 thousand years.";

console.log("My name is", firstName + ". I live in", city, "and I am a", job);

// 10
const foxStr = "the quick brown fox";
const firstFox = foxStr[0].toUpperCase();
const lazyFoxes = foxStr.substring(1);

console.log(firstFox + lazyFoxes);
