class BillingPage {
  elements = {
    amountButton: (value) => cy.get(`input[name="amount"][value="${value}"]`),
    topUpButton: () => cy.contains('button[type="submit"]', "Top-up now"),
    confirmButton: () => cy.contains("button", "Yes"),
    successMessage: () =>
      cy.contains('li[role="status"]', "Top-up successful."),
  };

  selectAmount(amount) {
    this.elements.amountButton(amount).check({ force: true });
    cy.get(`button[role="radio"][value="${amount}"]`)
      .click()
      .should("have.attr", "aria-checked", "true")
      .and("have.attr", "data-state", "checked");
  }

  clickTopUpButton() {
    this.elements.topUpButton().should("be.visible").wait(3000).click();
  }

  confirmTopUp() {
    this.elements.confirmButton().click();
  }

  waitForSuccessMessage() {
    cy.get('li[role="status"]', { timeout: 10000 })
      .should("be.visible")
      .contains("Top-up successful.");
  }
}

export default new BillingPage();
