/// <reference types = "Cypress"/>
import HomePage from "../PageObjects/Homepage"
import ProductPage from "../PageObjects/Productpage"

describe("My framework",function(){

    before(function(){
        // runs once before all tests in the block
        cy.fixture("example").then(function(data){
            this.data=data
        })
    })

    it("first test case",function(){

        const homepage = new HomePage()
        const productpage = new ProductPage()

        cy.visit(Cypress.env("url")+"/angularpractice/")

        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should("have.value",this.data.name)
        homepage.getEditBox().should("have.attr","minlength",2)
        homepage.getEntrepreneaur().should("be.disabled")

        homepage.getShopTab().click()

        //cypress configde duzenledigimiz ozellikler global olarak calisir
        //kod aralarina ozel bir istem olursa cypress.config komutu ile ilgili ozelligi manuple edebiliriz.
        Cypress.config("defaultCommandTimeout", 8000)


        //custom command

        //cy.selectProduct("Blackberry")
        //cy.selectProduct("Nokia Edge")

        // parametirize test with multiple data set
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productpage.getCheckOutButton().click()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            //const amount = $el.text()
            //var res = amount.split(" ")
            //res = res[1].trim()
            var res = Number($el.text().replace("₹.", ""))
            sum =Number(sum) + Number(res)
      
          }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {
 
            const amount = Number(element.text().replace("₹.", ""))
            // var res = amount.split(" ")
            // var total = res[1].trim()
            expect(amount).to.equal(sum)      
        })


        cy.contains('Checkout').click()
        cy.get('#country').type('India').wait(2000)
        // cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })


        
    })
})