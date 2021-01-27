describe('All Tests', function() {
    it('Johns Test', function(){
        cy.visit("http://localhost:3000/")

        cy.get('.AddTag').click()
        cy.get('.TagsTitle').contains('Tags:')

 
        cy.get('.AddTagFrame').should('have.attr', 'test')
        
    })

    it('Sullivan\'s Tests', () => {
        cy.visit("http://localhost:3000/");

        cy.get('.AddTag').click();
        cy.get('.TagsTitle').contains('Tags:');

        cy.get('.CreateTag').should('contain', 'Create Tag');
    })
})