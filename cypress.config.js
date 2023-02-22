const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  retries: {
    runMode: 2,
    openMode: 0
    },

  env: {
    url:"https://rahulshettyacademy.com"
  },

  projectId: "qt742p",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/examples/*.js"
  },
});
