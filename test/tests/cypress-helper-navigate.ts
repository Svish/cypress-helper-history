import { createMemoryHistory as createHistory } from 'history';

const PATH = '/test';

describe('cypress-helper-navigate', () => {
  beforeEach(() => {
    cy.visit('./fixtures/index.html');
  });

  describe('navigate', () => {
    describe('usage', () => {
      context('window.history.pushState', () => {
        it('can navigate to a url', () => {
          cy.location('pathname').should('not.equal', PATH);
          cy.navigate(PATH);
          cy.location('pathname').should('equal', PATH);
        });
      });

      context('history.push', () => {
        it('can navigate to a url', () => {
          const history = createHistory();
          cy.window().then(win => ((win as any).__chh__history__ = history));

          cy.spy(history, 'push');
          history.listen((location, action) => {
            expect(action).to.equal('PUSH');
            expect(location.pathname).to.equal(PATH);
            expect(location.state).to.equal('foobar');
          });

          cy.navigate(PATH, 'foobar');

          cy.wrap(history)
            .its('push')
            .should('have.been.called');
        });
      });
    });

    describe('options', () => {
      it('can disable logging via log = false', () => {
        cy.navigate(PATH, undefined, { log: false });
      });
    });
  });
});
