/// <reference types='cypress' />

it('Google Search', () => {
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("Gangnam Style{Enter}")
    cy.contains('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube', {
        timeout: 15000
    }).click()
    
})