/// <reference types='cypress' />

it('Assertion Demo - Implicity', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.id', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
})

it('Assertion Demo - Explicity', () => {
    expect(true).to.be.true
    //expect(true).to.be.false

    let name = "cypress"
    expect(name).to.be.equal("cypress")

    //assert.equal(4, 5, "Not Equal")
    assert.equal(4, 4, "Is Equal")
    //assert.strictEqual(4, '4', "Equal")
    assert.strictEqual(4, 4, "Equal")
    assert.equal(4, '4', "Is Equal (not strict '4')")
})