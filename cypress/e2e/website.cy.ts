describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('renders with initial count of 0', () => {
    cy.contains('p', 'You have clicked 0 times');
  });

  it('increments count when button is clicked', () => {
    cy.get('button').click();
    cy.contains('p', 'You have clicked 1 times');
  });

  it('increments count multiple times when button is clicked multiple times', () => {
    for (let i = 1; i <  10; i++) {
      cy.get('button').click();
      cy.contains('p', `You have clicked ${i} times`);
    }
  });
})
