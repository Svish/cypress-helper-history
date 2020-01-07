const PATH = '/test';

describe('navigate', () => {
  beforeEach(() => {
    cy.visit('./fixtures/index.html');
  });

  describe('usage', () => {
    it('can navigate to a url', () => {
      cy.location('pathname').should('not.equal', PATH);
      cy.navigate(PATH);
      cy.location('pathname').should('equal', PATH);
    });
  });

  describe('options', () => {
    it('can disable logging via log = false', () => {
      cy.navigate(PATH, { log: false });
    });
  });
});
