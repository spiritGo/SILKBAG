// let isDone: boolean = false;
// console.log(isDone);

// function printLabel(label: { label: string }) {
//   console.log(label.label);
// }

// let o = { size: 10, label: "size is 10" };
// printLabel(o);

// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.clor) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.clor;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });