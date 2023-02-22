/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

// npm install -D cypress-iframe paketini yukluyoruz
//ardindan import 'cypress-iframe' yapiyoruz
describe("iframe testing",function () {

    it("my firts test case",function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //sayfadaki iframe i loaded yapiyoruz
        cy.frameLoaded("#courses-iframe")

        //iframein icinde istedigimiz elemente find ile ulasiyoruz
        cy.iframe().find("a[href='mentorship']").eq(0).click().wait(2000)
        cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)

    })
    
})