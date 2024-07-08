## Logo Generator

# Description
The Logo Generator is a command-line application that allows users to generate a custom SVG logo. Users can specify text (up to 3 characters), text color, shape (circle, square, or triangle), and shape color. The application generates an SVG file based on the user's input.

# Table of Contents
- Installation
- Usage
- Tests
- Technologies

# Installation
1. Clone the repo
```
git clone <repository-url>
cd M10-logo-generator
```
2. install dependencies
```
npm install
```

# Usage
1. run the application
```
node index.js
```
2. Follow the prompts:
- Enter text for the logo (up to 3 characters).
- Enter a color for the text.
- Select a shape (circle, square, triangle).
- Enter a color for the shape.

3. Output:
- The application generates an 'logo.svg' file in the root directory
- A message "Generated logo.svg" is displayed in the command line

# Tests
1. Run tests:
```
npm test
```
Test details:
- Tests are written using Jest.
- They cover functionality for shape rendering and SVG generation.

# Technologies
- Node.js
- Inquirer.js
- Jest

