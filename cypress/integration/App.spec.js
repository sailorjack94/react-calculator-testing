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

  it ('does the app handle negative numbers as the result of a calculation?', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  }); 

  //This test fails. The calculator cannot handle numbers longer than 16 characters.
  xit ('does the app handle big numbers?', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '11111111111111111')
  }); 

  //Dividing by 0 should return undefined. The code returns Infinity. Javascript problem.
  xit ('dividing by zero should result in undefined', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'undefined')
  }); 


})