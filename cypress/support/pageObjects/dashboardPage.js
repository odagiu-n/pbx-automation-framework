class DashboardPage {
  elements = {
    balanceCard: () => cy.get(".balance-card span"),
    sidebarProfileCard: () => cy.get(".sidebar-profile-card"),
    companyButton: () => cy.get('a[data-sidebar-button="/company"]'),
  };

  getBalance() {
    return this.elements
      .balanceCard()
      .invoke("text")
      .then((text) => parseFloat(text.replace(/[^\d.]/g, "")));
  }

  hoverOverProfile() {
    this.elements.sidebarProfileCard().trigger("mouseover");
  }

  hoverOutProfile() {
    this.elements.sidebarProfileCard().trigger("mouseout");
  }

  clickCompanyButton() {
    this.elements.companyButton().click();
  }
}

export default new DashboardPage();
