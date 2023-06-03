// LoginPage.ts
class LoginPage {
    private emailInput: string;
    private passwordInput: string;
    private loginButton: string;
  
    constructor() {
      this.emailInput = '#username';
      this.passwordInput = '#password';
      this.loginButton = '#submit';
    }
  
    public login(email: string, password: string): void {
      cy.get(this.emailInput).type(email);
      cy.get(this.passwordInput).type(password);
      cy.get(this.loginButton).click();
    }
  }
  
  export default new LoginPage();
  