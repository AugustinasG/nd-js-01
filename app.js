console.log("laba diena");

//1
const tagH1 = document.querySelector("h1");
tagH1.innerText = "1";

const tagH2 = document.querySelector("h2");
tagH2.innerText = "2";

const tagH3 = document.querySelector("h3");
tagH3.innerText = "3";

const tagH4 = document.querySelector("h4");
tagH4.innerText = "4";

//2

const div1 = document.querySelector("div:nth-of-type(1)");
const div2 = document.querySelector("div:nth-of-type(2)");

div1.style.backgroundColor = "skyblue";
div1.style.border = "2px dashed black";
div1.style.width = "160px";
div1.style.height = "146px";

div2.style.backgroundColor = "red";
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.borderRadius = "50%";

//3

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const kintp = rand(0, 4);
const kinta = rand(0, 4);

const span1 = document.querySelector("span:nth-of-type(1)");
const span2 = document.querySelector("span:nth-of-type(2)");
const span3 = document.querySelector("span:nth-of-type(3)");

if (kintp > kinta) {
  span1.innerText = kintp;
  span2.innerText = kinta;
} else {
  span1.innerText = kinta;
  span2.innerText = kintp;
}

if (kintp === 0) {
  span3.innerText = "negalima";
} else if (kinta === 0) {
  span3.innerText = "negalima";
} else if (kintp > kinta) {
  span3.innerText = kintp / kinta;
} else {
  span3.innerText = kinta / kintp;
}

//4

const kintA = rand(50, 200);
const kintB = rand(50, 200);
const kintC = rand(50, 200);

const div3 = document.querySelector("section#go4 div:nth-of-type(1)");
const div4 = document.querySelector("section#go4 div:nth-of-type(2)");
const div5 = document.querySelector("section#go4 div:nth-of-type(3)");

div3.style.backgroundColor = "red";
div3.style.width = "auto";
div3.style.height = "auto";
div3.style.borderRadius = "50%";

div4.style.backgroundColor = "red";
div4.style.width = "auto";
div4.style.height = "auto";
div4.style.borderRadius = "50%";

div5.style.backgroundColor = "red";
div5.style.width = "auto";
div5.style.height = "auto";
div5.style.borderRadius = "50%";

if (kintA > kintB) {
  if (kintA > kintC) {
    div5.style.height = kintA + "px";
    div5.style.width = kintA + "px";
    if (kintB > kintC) {
      div4.style.height = kintB + "px";
      div4.style.width = kintB + "px";
      div3.style.height = kintC + "px";
      div3.style.width = kintC + "px";
    } else {
      div4.style.height = kintC + "px";
      div4.style.width = kintC + "px";
      div3.style.height = kintB + "px";
      div3.style.width = kintB + "px";
    }
  } else {
    div5.style.height = kintC + "px";
    div5.style.width = kintC + "px";
    div4.style.height = kintA + "px";
    div4.style.width = kintA + "px";
    div3.style.height = kintB + "px";
    div3.style.width = kintB + "px";
  }
} else {
  if (kintB > kintC) {
    div5.style.height = kintB + "px";
    div5.style.width = kintB + "px";

    if (kintA > kintC) {
      div4.style.height = kintA + "px";
      div4.style.width = kintA + "px";
      div3.style.height = kintC + "px";
      div3.style.width = kintC + "px";
    } else {
      div4.style.height = kintC + "px";
      div4.style.width = kintC + "px";
      div3.style.height = kintA + "px";
      div3.style.width = kintA + "px";
    }
  } else {
    div5.style.height = kintC + "px";
    div5.style.width = kintC + "px";
    div4.style.height = kintB + "px";
    div4.style.width = kintB + "px";
    div3.style.height = kintA + "px";
    div3.style.width = kintA + "px";
  }
}

//5

const kint1 = rand(-10, 10);
const kint2 = rand(-10, 10);
const kint3 = rand(-10, 10);

const span4 = document.querySelector("section#go5 span:nth-of-type(1)");
const span5 = document.querySelector("section#go5 span:nth-of-type(2)");
const span6 = document.querySelector("section#go5 span:nth-of-type(3)");

if (kint1 > 0) {
  span4.innerText = kint1;
  span4.style.color = "blue";
} else if (kint1 == 0) {
  span4.innerText = kint1;
  span4.style.color = "green";
} else {
  span4.innerText = kint1;
  span4.style.color = "red";
}

if (kint2 > 0) {
  span5.innerText = kint2;
  span5.style.color = "blue";
} else if (kint2 == 0) {
  span5.innerText = kint2;
  span5.style.color = "green";
} else {
  span5.innerText = kint2;
  span5.style.color = "red";
}

if (kint3 > 0) {
  span6.innerText = kint3;
  span6.style.color = "blue";
} else if (kint3 == 0) {
  span6.innerText = kint3;
  span6.style.color = "green";
} else {
  span6.innerText = kint3;
  span6.style.color = "red";
}

// 6 span find
const var1 = rand(5, 3000);

const span7 = document.querySelector("section#go6 [data-amount] span");
const span8 = document.querySelector("section#go6 [data-subtotal] span");
const span9 = document.querySelector("section#go6 [data-discount] span");
const span10 = document.querySelector("section#go6 [data-total] span");

span7.innerText = var1;
span8.innerText = var1;

if (var1 > 2000) {
  span9.innerText = 4;
} else if (var1 > 1000) {
  span9.innerText = 3;
} else {
  span9.innerText = 0;
}

if (var1 > 2000) {
  span10.innerText = var1 - (var1 * 4) / 100;
} else if (var1 > 1000) {
  span10.innerText = var1 - (var1 * 3) / 100;
} else {
  span10.innerText = var1;
}

//7

const divq7 = document.querySelector("section#go7 div:nth-of-type(1)");

const fig1 = rand(1, 10);
const fig2 = rand(1, 10);
const fig3 = rand(1, 10);

if ((fig1 > fig2) & (fig1 > fig3)) {
  divq7.style.backgroundColor = "red";
  divq7.style.width = "100px";
  divq7.style.height = "100px";
  divq7.style.borderRadius = "50%";
} else if ((fig2 > fig1) & (fig2 > fig3)) {
  divq7.style.backgroundColor = "skyblue";
  divq7.style.border = "2px dashed black";
  divq7.style.width = "160px";
  divq7.style.height = "146px";
} else {
  divq7.style.width = "0";
  divq7.style.height = "0";
  divq7.style.borderLeft = "50px solid transparent";
  divq7.style.borderRight = "50px solid transparent";
  divq7.style.borderBottom = "50px solid green";
}

//8

const circle1 = document.querySelector("#go8 > div:nth-child(1)");
const circle2 = document.querySelector("#go8 > div:nth-child(2)");
const circle3 = document.querySelector("#go8 > div:nth-child(3)");
const circle4 = document.querySelector("#go8 > div:nth-child(4)");
const circle5 = document.querySelector("#go8 > div:nth-child(5)");
const circle6 = document.querySelector("#go8 > div:nth-child(6)");

const answergreen = document.querySelector(
  "#go8 > div:nth-child(7) > p:nth-child(2) > span"
);
const answerred = document.querySelector(
  "#go8 > div:nth-child(7) > p:nth-child(3) > span"
);
const answerblue = document.querySelector(
  "#go8 > div:nth-child(7) > p:nth-child(4) > span"
);

let redCount = 0;
let blueCount = 0;
let greenCount = 0;

if (circle1.style.backgroundColor === "green") greenCount++;
if (circle1.style.backgroundColor === "red") redCount++;
if (circle1.style.backgroundColor === "blue") blueCount++;

if (circle2.style.backgroundColor === "green") greenCount++;
if (circle2.style.backgroundColor === "red") redCount++;
if (circle2.style.backgroundColor === "blue") blueCount++;

if (circle3.style.backgroundColor === "green") greenCount++;
if (circle3.style.backgroundColor === "red") redCount++;
if (circle3.style.backgroundColor === "blue") blueCount++;

if (circle4.style.backgroundColor === "green") greenCount++;
if (circle4.style.backgroundColor === "red") redCount++;
if (circle4.style.backgroundColor === "blue") blueCount++;

if (circle5.style.backgroundColor === "green") greenCount++;
if (circle5.style.backgroundColor === "red") redCount++;
if (circle5.style.backgroundColor === "blue") blueCount++;

if (circle6.style.backgroundColor === "green") greenCount++;
if (circle6.style.backgroundColor === "red") redCount++;
if (circle6.style.backgroundColor === "blue") blueCount++;

answergreen.innerText = greenCount;
answerred.innerText = redCount;
answerblue.innerText = blueCount;

//9

const span9q1 = document.querySelector(
  "#go9 > div:nth-child(1) > span:nth-child(1)"
);
const span9q2 = document.querySelector(
  "#go9 > div:nth-child(1) > span:nth-child(2)"
);
const span9q3 = document.querySelector(
  "#go9 > div:nth-child(1) > span:nth-child(3)"
);
const span9q4 = document.querySelector(
  "#go9 > div:nth-child(2) > span:nth-child(1)"
);
const span9q5 = document.querySelector(
  "#go9 > div:nth-child(2) > span:nth-child(2)"
);
const span9q6 = document.querySelector(
  "#go9 > div:nth-child(2) > span:nth-child(3)"
);
const span9q7 = document.querySelector(
  "#go9 > div:nth-child(3) > span:nth-child(1)"
);
const span9q8 = document.querySelector(
  "#go9 > div:nth-child(3) > span:nth-child(2)"
);
const span9q9 = document.querySelector(
  "#go9 > div:nth-child(3) > span:nth-child(3)"
);
const span9q10 = document.querySelector(
  "#go9 > div:nth-child(4) > span:nth-child(1)"
);
const span9q11 = document.querySelector(
  "#go9 > div:nth-child(4) > span:nth-child(2)"
);
const span9q12 = document.querySelector(
  "#go9 > div:nth-child(4) > span:nth-child(3)"
);
const span9q13 = document.querySelector(
  "#go9 > div:nth-child(5) > span:nth-child(1)"
);
const span9q14 = document.querySelector(
  "#go9 > div:nth-child(5) > span:nth-child(2)"
);
const span9q15 = document.querySelector(
  "#go9 > div:nth-child(5) > span:nth-child(3)"
);

const number1 = parseInt(span9q1.innerText);
const number2 = parseInt(span9q2.innerText);
const number3 = parseInt(span9q4.innerText);
const number4 = parseInt(span9q5.innerText);
const number5 = parseInt(span9q7.innerText);
const number6 = parseInt(span9q8.innerText);
const number7 = parseInt(span9q10.innerText);
const number8 = parseInt(span9q11.innerText);
const number9 = parseInt(span9q13.innerText);
const number10 = parseInt(span9q14.innerText);

span9q3.innerText = number1 * number2;
span9q6.innerText = number3 * number4;
span9q9.innerText = number5 * number6;
span9q12.innerText = number7 * number8;
span9q15.innerText = number9 * number10;

//10

const square1 = document.querySelector("#go10 > div:nth-child(1)");
const square2 = document.querySelector("#go10 > div:nth-child(2)");
const square3 = document.querySelector("#go10 > div:nth-child(3)");
const square4 = document.querySelector("#go10 > div:nth-child(4)");
const square5 = document.querySelector("#go10 > div:nth-child(5)");

const sq1width = parseInt(square1.style.width);
const sq2width = parseInt(square2.style.width);
const sq3width = parseInt(square3.style.width);
const sq4width = parseInt(square4.style.width);
const sq5width = parseInt(square5.style.width);

const sq1heigth = parseInt(square1.style.height);
const sq2heigth = parseInt(square2.style.height);
const sq3heigth = parseInt(square3.style.height);
const sq4heigth = parseInt(square4.style.height);
const sq5heigth = parseInt(square5.style.height);

const sqpl1 = sq1width * sq1heigth;
const sqpl2 = sq2width * sq2heigth;
const sqpl3 = sq3width * sq3heigth;
const sqpl4 = sq4width * sq4heigth;
const sqpl5 = sq5width * sq5heigth;

if (sqpl1 > 10000) {
  square1.style.backgroundColor = "red";
} else {
  square1.style.backgroundColor = "skyblue";
}

if (sqpl2 > 10000) {
  square2.style.backgroundColor = "red";
} else {
  square2.style.backgroundColor = "skyblue";
}

if (sqpl3 > 10000) {
    square3.style.backgroundColor = "red";
  } else {
    square3.style.backgroundColor = "skyblue";
  }
  
  if (sqpl4 > 10000) {
    square4.style.backgroundColor = "red";
  } else {
    square4.style.backgroundColor = "skyblue";
  }

  if (sqpl5 > 10000) {
    square5.style.backgroundColor = "red";
  } else {
    square5.style.backgroundColor = "skyblue";
  }
