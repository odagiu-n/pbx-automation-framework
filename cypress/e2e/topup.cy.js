import LoginPage from "../support/pageObjects/LoginPage";
import DashboardPage from "../support/pageObjects/DashboardPage";
import CompanyPage from "../support/pageObjects/CompanyPage";
import BillingPage from "../support/pageObjects/BillingPage";

describe("Billing Top-Up Test", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    LoginPage.visit();
  });

  it("should successfully top up the balance", () => {
    LoginPage.performLogin();
    cy.location("pathname", { timeout: 15000 }).should("include", "/dashboard");

    let initialBalance;
    DashboardPage.getBalance().then((balance) => {
      initialBalance = balance;

      DashboardPage.hoverOverProfile();
      DashboardPage.clickCompanyButton();
      DashboardPage.hoverOutProfile();
      cy.location("pathname", { timeout: 10000 }).should("include", "/company");

      CompanyPage.clickBillingTab();
      cy.location("pathname").should("include", "/company/billing");

      BillingPage.selectAmount(50);
      BillingPage.clickTopUpButton();
      BillingPage.confirmTopUp();

      BillingPage.waitForSuccessMessage();

      cy.reload();
      DashboardPage.getBalance().then((updatedBalance) => {
        expect(updatedBalance).to.equal(initialBalance + 50);
      });
    });
  });
});
