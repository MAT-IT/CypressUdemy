/// <reference types="Cypress" />
 
describe('My Fourth Test Suite', function() 
{
 
    it('Window event and remove Attributes',function() {
 
        //Alert and pop-up otomatik handling oluyor
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert is the event which get fired on the alert open
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
 
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //cypress target attrr ile acilan yeni tab i algilayamiyor
        //bu yuzden invoke methodu ile jqueryy func larindan removeAttr kullanilarak 
        //target kaldiriliyor ve yeni tab mevcut tabin yerine aciliyor
        // Use cy.invoke('removeAttr', 'target') to get around new tab
        // Check out our example recipe where we use 
        // cy.invoke('removeAttr', 'target') to test clicking on a link without opening in a new tab
        
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        
        //Browser navigation method "go"
        cy.go('back')

        // 2. yontem href ???????

    })    
 
})