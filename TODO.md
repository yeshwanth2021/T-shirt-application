# TODO List for Math API Implementation

- [x] Update package.json: Add Jest as devDependency and update test script to "jest"
- [x] Create folders: routes/, controllers/, tests/
- [x] Create controllers/mathController.js with add, subtract, multiply, divide functions (including error handling for division by zero)
- [x] Create routes/mathRoutes.js with GET routes /add, /subtract, /multiply, /divide using controller functions
- [x] Create index.js: Set up Express app, register mathRoutes, listen on port 3000
- [x] Create tests/mathController.test.js with Jest tests for each function (valid inputs and errors)
- [ ] Run npm install to install dependencies
- [ ] Run npm test to verify tests pass
