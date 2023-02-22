/// <reference types = "Cypress" />

describe("handling mouse-hover",function () {
    it("my firts test case",function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handling mouse-hover 
        //first method use jquery show()method
        cy.get('div.mouse-hover-content').invoke("show")
        cy.contains("Top").click()

        //second method use {force: true} in clik()
        //cy.contains("Top").click({force: true})
        //cy.url().should("includes","top")

        //third method is using trigger()
        //cy.get('.mouse-hover').trigger("mouseover").wait(2000)
        //cy.get('.mouse-hover-content [href="#top"]').click({force: true})

    })
    
})