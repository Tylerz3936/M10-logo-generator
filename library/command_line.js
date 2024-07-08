const inquirer = require("inquirer");
const SVG = require("./svg");
const { Square, Circle, Triangle } = require("./shape");
const { writeFile } = require("fs/promises");

class CommandLine {
  run() {
    console.log("Starting prompt...");
    return inquirer
      .prompt([
        {
          name: "t",
          type: "input",
          message: "Enter text for the logo. (3 characters max)",
          validate: (text) => text.length <= 3 || "The message must not contain more than 3 characters",
        },
        {
          name: "tc",
          type: "input",
          message: "Enter a color for your text",
        },
        {
          name: "st",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["square", "circle", "triangle"],
        },
        {
          name: "sc",
          type: "input",
          message: "Enter a color for your shape",
        },
      ])
      .then(({ t, tc, st, sc }) => {
        console.log(`User inputs received: t=${t}, tc=${tc}, st=${st}, sc=${sc}`);
        let shape;
        switch (st) {
          case "circle":
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
          default:
            shape = new Triangle();
            break;
        }
        shape.setColor(sc);

        const svg = new SVG();
        svg.setText(t, tc);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.error(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CommandLine;
