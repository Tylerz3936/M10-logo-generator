const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shape");

describe("SVG", () => {
  test("render a 200 x 200 svg element", () => {
    const expectedSvg = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("append text element", () => {
    const expectedSvg = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("set text message and color", () => {
    const expectedSvg = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("throw if text exceeds 3 characters", () => {
    const expectedError = new Error("T3 characters max");
    const svg = new SVG();
    expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
  });

  test("should include a shape", () => {
    const expectedSvg = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const square = new Square();
    square.setColor("red");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("should include a circle", () => {
    const expectedSvg = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const circle = new Circle();
    circle.setColor("blue");
    svg.setShape(circle);
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("should include a triangle", () => {
    const expectedSvg = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const triangle = new Triangle();
    triangle.setColor("green");
    svg.setShape(triangle);
    expect(svg.render()).toEqual(expectedSvg);
  });
});
