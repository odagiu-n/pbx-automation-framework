const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://victorautoation2.pbxstage.net",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {},
    env: {
      email: "victor.malai+qaautomation2@binarcode.com",
      password: "Admin123!!!!!_",
    },
    experimentalRunAllSpecs: true,
  },
  video: false,
  screenshotOnRunFailure: true,
});
