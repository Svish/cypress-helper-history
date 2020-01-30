declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Navigate via History API. Simple SPA alternative to `cy.visit`.
     *
     * @example
     *     cy.navigate('/foobar');
     */
    navigate: typeof import('./navigate').default;
  }
}
