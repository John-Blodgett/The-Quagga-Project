describe('Individual Assignment: Acceptance Testing using Cypress', function() {
    
    it('Johns Test', function(){
        cy.visit("http://localhost:3000/")

        cy.get('.AddTag').click()
        cy.get('.TagsTitle').contains('Tags:')

 
        cy.get('.AddTagFrame').should('have.attr', 'test')
        
    })

    it('Sullivan\'s Tests', () => {
        cy.visit("https://localhost:3000/");

        cy.get('.AddTag').click()
        cy.get('.TagsTitle').contains('Tags:')

        cy.get('.CreateTag').contains('Create Tag').should('have.attr', 'onClick')
    })

    it('Chris\'s Tests', () => {
        cy.visit("https://localhost:3000/");

        cy.get('.DelTag').click(); // functionality not implemented yet
    })
})