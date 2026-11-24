class CadastroPage {

  //Seletores
  CampoNome() { return cy.get('#name') }
  CampoEmail() { return cy.get('#email') }
  CampoTelefone() { return cy.get('#phone') }
  CampoSenha() { return cy.get('#password') }
  CampoConfirmarSenha() { return cy.get('#confirm-password') }
  CampoTermos() { return cy.get('#terms-agreement') }
  botaoCriarConta() { return cy.get('#register-btn') }

  //Métodos

  visitarPaginaCadastro() {
    cy.visit('register.html')
  }

  preencherCadastro(nome, email, telefone, senha, confirmarSenha) {
    if(nome) this.CampoNome().clear().type(nome)
    this.CampoEmail().clear().type(email) 
    this.CampoTelefone().clear().type(telefone)
    this.CampoSenha().clear().type(senha)
    this.CampoConfirmarSenha().clear().type(confirmarSenha)
    this.CampoTermos().check()
    this.botaoCriarConta().click()
  }
}

export default new CadastroPage()