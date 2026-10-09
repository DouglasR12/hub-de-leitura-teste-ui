///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve realizar cadastro com sucesso', () => {
        let nome = faker.person.fullName();
        let email = faker.internet.email();
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('81998232813')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });
    it('Deve realizar cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName();
        let email = faker.internet.email();
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('81998232813')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('user-name').should('contain',nome)
    });
});