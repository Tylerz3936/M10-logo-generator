const { Circle, Triangle, Square } = require("./shape");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor parameter", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
    const circle = new Circle();
    circle.setColor("red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a blue triangle element", () => {
    const expectedSvg = '<polygon points="150,18 244,182 56,182" fill="blue" />';
    const triangle = new Triangle();
    triangle.setColor("blue");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor parameter", () => {
    const expectedSvg = '<polygon points="150,18 244,182 56,182" fill="orange" />';
    const triangle = new Triangle();
    triangle.setColor("orange");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a purple square element", () => {
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="purple" />';
    const square = new Square();
    square.setColor("purple");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor parameter", () => {
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="pink" />';
    const square = new Square();
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
