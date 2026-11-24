///<reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro();
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
    });

    it('Deve realizar cadastro com sucesso usando comando customizado', () => {
        cy.preencherCadastro(faker.person.fullName(), faker.internet.email(), '81998232813', 'Teste@123', 'Teste@123')
    });

    it('Deve fazer cadastro com sucesso - Usando Page Object', () => {
        cadastroPage.preencherCadastro(faker.person.fullName(), faker.internet.email(), '81998232813', 'Teste@123', 'Teste@123')
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('', faker.internet.email(), '81998232813', 'Teste@123', 'Teste@123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });






});
