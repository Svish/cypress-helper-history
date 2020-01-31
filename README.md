# cypress-helper-history

A [Cypress](https://www.cypress.io/) [command](https://docs.cypress.io/api/cypress-api/custom-commands.html) for navigating via the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) during tests; an alternative to [`cy.visit`](https://docs.cypress.io/api/commands/visit.html) for manually navigating within single page applications.

Uses [`window.history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) by default.

If you're using [`history`](https://www.npmjs.com/package/history) (for example with `react-router`), you can easily make the helper use its `history.push` instead.

[![npm version](https://img.shields.io/npm/v/cypress-helper-history.svg?style=flat-square) ![npm downloads](https://img.shields.io/npm/dm/cypress-helper-history?style=flat-square)](https://www.npmjs.com/package/cypress-helper-history)

## Setup

### 1. Install package

```shell
npm install --save-dev cypress-helper-history
```

### 2. Include Cypress command

```js
// E.g. in cypress/support/index.js
import 'cypress-helper-history';
```

### 3. Configure to use custom `history` (optional)

```js
// E.g. in src/history.js

// Just as an example:
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();
export default history;

// This is the important bit:
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
