class UserRegistrationPage {
    go() {
        // visita a pagina
        cy.visit('/treinamento/home');
        cy.get('.orange-text').should('have.text', 'Bem vindo ao Site de Automação do Batista.');
    }

    clickLinkForm() {
        cy.get('a[class="collapsible-header "]').click();
    }

    clickLinkCreateUser() {
        cy.get('a[href="/users/new"]').click();
    }

    fillForm(user) {
        cy.get('#user_name').type(user.name);
        cy.get('#user_lastname').type(user.lastName);
        cy.get('#user_email').type(user.email);
        cy.get('#user_address').type(user.address);
        cy.get('#user_university').type(user.university);
        cy.get('#user_profile').type(user.job);
        cy.get('#user_gender').type(user.gender);
        cy.get('#user_age').type(user.age);


        cy.get('#user_name').should('have.value', user.name);
        cy.get('#user_lastname').should('have.value', user.lastName);
        cy.get('#user_email').should('have.value', user.email);

    }

    btnCreate() {
        cy.get('input[value="Criar"]').click();
    }

    clickIconDelete(){
        cy.get('tr:nth-child(1) > td:nth-child(11) > a').click();

    }

    clickLinkList(){
        cy.get('a[href="/users"]').click();
    }

    noticeContentShouldBe(expectedMessage){
        cy.get('#notice').should('have.text', expectedMessage);
    }

    btnBack() {
        cy.get('a[class="btn red"]').click();
    }

    listContentShouldBe(expectedMessage){
        cy.get('h5[class="center"]').should('have.text', expectedMessage);
    } 



}

export default new UserRegistrationPage;