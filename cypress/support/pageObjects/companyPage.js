class CompanyPage {
  elements = {
    billingTab: () => cy.get("#billing-tab"),
  };

  clickBillingTab() {
    this.elements.billingTab().should("be.visible").click();
  }
}

export default new CompanyPage();
