describe('Individual Assignment: Acceptance Testing using Cypress', function() {
    
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

    it('Elis Test - Add custom name to a new tag.', function(){
        cy.visit("http://localhost:3000/")

        cy.get('.AddTag').click()
        cy.get('.TagsTitle').contains('Tags:')
        cy.get('.AddTagFrame')
        cy.get('.CreateNewFrame')

        cy.get('.CustomInput')
          .type('Urgent')
          .should('have.value', 'Urgent')
    })

    it('Chris\'s Tests', () => {
        cy.visit("https://localhost:3000/");

        cy.get('.DelTag').click(); // functionality not implemented yet
    })
    it('Brandons Tests', () =>{
        cy.visit("https://localhost:3000/")
        cy.get('.AddTag').click()
        cy.get('.TagsTitle').contains('Tags:')
        cy.get('.AddTagFrame')
        cy.get('.CreateNewFrame')

        cy.get('.CustomInput')
          .type('309')
          .should('have.value', '309')

    })
})