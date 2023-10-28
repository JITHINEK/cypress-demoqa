/// <reference types='cypress' />

describe("Group Test Demo", () => {

    beforeEach("Load Google", () => {
        cy.visit("https://www.google.com/")
    })

    it('Google Search', () => {
        cy.get('#APjFqb').type("Gangnam Style{Enter}")
        cy.contains('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube', {
            timeout: 15000
        }).click()
        
    })

    it('Google Search', () => {
        cy.get('#APjFqb').type("Gangnam Style{Enter}")
        cy.contains('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube', {
            timeout: 15000
        }).click()    
    })
})
