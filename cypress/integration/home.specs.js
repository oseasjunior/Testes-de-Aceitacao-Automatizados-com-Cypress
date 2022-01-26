describe('Home Page', function () {
    it('app must be online', function () {
        cy.visit('/treinamento/home');
        cy.get('.orange-text').should('have.text', 'Bem vindo ao Site de Automação do Batista.');

    });

});

