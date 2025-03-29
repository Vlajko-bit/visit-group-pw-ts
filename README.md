**Project Title:**

Visit Group Task Assignment
Test Automation Solutions using Playwright and TypeScript.


**Description:**

This project demonstrates test automation for a booking flow, solved with Playwright and TypeScript.
It automates the process of booking accommodation on a sample website, testing the interaction with date pickers, booking buttons, and confirming the booking process.


**Installation Instructions:**


  *Install Node 
 First, make sure Node.js is installed on your machine. If you don’t have it installed, download and install it from here (https://nodejs.org/en).
To check if Node.js is installed and verify the version, run this in your terminal: `node -v`

  *Install Playwright
To install Playwright and the required dependencies, run: `npm install playwright`

  *Setting Up the Project
- Clone the repository to your local machine: `git clone https://github.com/Vlajko-bit/visit-group-pw-ts.git`
- Navigate into the project directory: `cd visit-group-pw-ts`
- Install the project dependecises if needed: `npm install`

**Environment Configuration**

The root URL for the application under test is defined in the prop.properties file. Make sure the URL is set correctly for your testing environment:
File: config/prop.properties
`BASE_URL=https://www2.destinationgotland.se/en/accommodation`

**Running the Tests**

To run the tests, use the following commands:

`npx playwright test`

`npx playwright test --ui` -> To run Playwright tests with the Playwright Test Runner UI


**Technologies Used:**

•	Playwright: Browser automation framework for end-to-end testing.

•	TypeScript: A strongly-typed programming language that builds on JavaScript.

•	Properties-Reader: A utility to load configuration properties from .properties files.

•	Node.js: JavaScript runtime used to execute Playwright scripts.


**Project Structure**

•	tests/: Contains the test files. The main test file is searchAndBook.spec.ts, which includes the complete booking flow test.

•	pages/: Contains the Page Object Model (POM). Currently, there’s a single page object file named searchPage.ts, which handles interactions on the booking page.

•	config/: Contains configuration files, including the prop.properties file that stores the environment variables, such as the BASE_URL.

**Page Object Model (POM)**

This project follows a simple implementation of the Page Object Model (POM) design pattern. The page object is defined in the searchPage.ts file, which includes:
	•	Locators for all key elements on the page (calendar, buttons, etc.).
	•	Methods to interact with those elements (e.g., selectCheckIn(), clickOnSearchButton()).
	•	Methods to validate page state or outcomes (e.g., verifyThatRoomAddedToBasketProperly()).

**Features Demonstrated**

•	Page Object Model (POM): Keeps the test code clean and reusable.

•	Playwright Test Hooks:

•	beforeEach: Setup code to initialize pages before each test.

•	afterAll: Cleanup after all tests are finished.

•	Class Import/Export: Import and export functionality in TypeScript for better structure and organization.

•	Methods and Constructor: Use of class methods and constructor to organize logic and facilitate easy interaction with page elements.

•	Environment Variable Configuration (BASE_URL): The root URL for the application under test is defined as an environment variable in the prop.properties file, ensuring flexibility and adaptability across different environments.

 
**Extra:**

Just to note, in playwright.config.ts configurational file is changed, I commented out executing test in Firefox and Safari, you can change that if needed.
