class LoginPage {
  elements = {
    emailInput: () => cy.get('[name="email"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginButton: () => cy.contains('button[type="submit"]', "Log in"),
    yesButton: () => cy.contains("button", "Yes"),
  };

  visit() {
    cy.visit("/login");
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  performLogin(
    email = Cypress.env("email"),
    password = Cypress.env("password")
  ) {
    this.typeEmail(email);
    this.typePassword(password);
    this.clickLogin();
    cy.wait(3000);
    cy.get("body").then(($body) => {
      if ($body.find('[role="alertdialog"]').length > 0) {
        this.elements.yesButton().should("be.visible").click();
      }
    });
  }
}

export default new LoginPage();
