/// <reference types ="Cypress" />

describe("Handling web tables",function(){
    it("My first test case",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Handling web tables 
        //tr= satir td = satirin child stunu
        //'tr td:nth-child(2)' bu locat her satirin 2.child stununu getiriyor.
        cy.get('tr td:nth-child(2)').each(($el,index)=>{
            const text = $el.text()
            if (text.includes("Python")){
                //next metodu burada 7.satir 2. sutundan sonraki 3. stunu locat yapiyor.
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                })
            }
        })
    })
})