import LoginPage from "../support/pageObjects/loginPage";

describe("Login Test with POM", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    LoginPage.visit();
  });

  it("should login successfuly", () => {
    LoginPage.performLogin();
    cy.location("pathname", { timeout: 15000 }).should("include", "/dashboard");
  });
});
