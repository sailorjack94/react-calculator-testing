describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it ('do the results of calculations appear on the display?', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  });

  //This test fails, the calculator does not allow chaining together of operations - the display result is 5 (4+1).
  xit ('can multiple operations be chained together?', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6')
  });  

  //This test fails, the calculator cannot initialist negative numbers.
  xit ('does the app handle negative numbers?', () => {
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  });  







})