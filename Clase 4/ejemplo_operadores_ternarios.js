// https://editor.p5js.org/jdomenech/sketches/zXBXyzeQT

let red = false;

function setup() {
  // if-else convencional
  if (red) {
    fill("red");
  } else {
    fill("blue");
  }

  // if-else sin {}
  if (red) fill("red");
  else fill("blue");

  // ejemplos de uso de operadores ternarios
  red ? fill("red") : fill("blue");
  fill(red ? "red" : "blue");

  square(0, 0, 150);

  let color = red ? "red" : "blue";
  console.log(color);
}
