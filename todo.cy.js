
describe('example to-do app', () => {
  it('visits saucedemo', () => {
      Cypress.on("uncaught:exception", () => {
          return false;
      });
        cy.visit('https://www.saucedemo.com/')
      })

      it('account login', () => {
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        cy.get('[class="shopping_cart_link"]').should('be.visible')
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[class="inventory_item_name"]').should('be.visible')
        cy.get('[id="remove-sauce-labs-backpack"]').click()
        cy.get('[class="removed_cart_item"]').should('exist')
        cy.get('[id="react-burger-menu-btn"]').click()
        cy.get('[id="logout_sidebar_link"]').click()
      })
})




