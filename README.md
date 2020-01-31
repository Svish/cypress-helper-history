# cypress-helper-history

A [Cypress](https://www.cypress.io/) [command](https://docs.cypress.io/api/cypress-api/custom-commands.html) for navigating via the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) during tests; an alternative to [`cy.visit`](https://docs.cypress.io/api/commands/visit.html) for manually navigating within single page applications.

Uses [`window.history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) by default, but you can make the helper use a [`history`](https://www.npmjs.com/package/history) instance as well.

[![npm version](https://img.shields.io/npm/v/cypress-helper-history.svg?style=flat-square) ![npm downloads](https://img.shields.io/npm/dm/cypress-helper-history?style=flat-square)](https://www.npmjs.com/package/cypress-helper-history)

## Setup

### 1. Install package

```shell
npm install --save-dev cypress-helper-history
```

### 2. Import Cypress command

```js
// E.g. in cypress/support/index.js
import 'cypress-helper-history';
```

### 3. Expose your `history` (optional)

```js
// E.g. in src/history.js

// Create your history instance, for example like this:
import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();
export default history;

// Then expose it to the helper like this:
if ('Cypress' in window) {
  window.__chh__history__ = history;
}
```

## Usage

```js
describe('cypress-helper-navigate', () => {
  before(() => {
    cy.visit('/');
  });

  it('can do client-side navigation', () => {
    cy.location('pathname').should('equal', '/');
    cy.navigate('/example');
    cy.location('pathname').should('equal', '/example');
  });

  it('supports log option', () => {
    cy.navigate('/not-logged', undefined, { log: false });
  });

  it('supports passing in state', () => {
    cy.navigate('/with-state', { foo: 'bar' });
  });
});
```
