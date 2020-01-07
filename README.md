# cypress-helper-history

A [Cypress](https://www.cypress.io/) [command](https://docs.cypress.io/api/cypress-api/custom-commands.html) for navigating via the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) during tests. For example to avoid using [`cy.visit`](https://docs.cypress.io/api/commands/visit.html) when manually navigating within single page applications.

[![npm version](https://img.shields.io/npm/v/cypress-helper-history.svg?style=flat-square) ![npm downloads](https://img.shields.io/npm/dm/cypress-helper-history?style=flat-square)](https://www.npmjs.com/package/cypress-helper-history)

## Setup

### 1. Install

```shell
npm install --save-dev cypress-helper-history
```

### 2. Include

```js
// E.g. in cypress/support/index.js
import 'cypress-helper-history';
```

## Usage

```js
it('can navigate', () => {
  cy.navigate('/example');
  cy.location('pathname').should('equal', '/example');
});
```

## Usage with [history](https://www.npmjs.com/package/history)

Simply make your `history` instance available to the helper like this:

```js
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();

if ('Cypress' in window) {
  window.__chh__history__ = history;
}
```

With that done, `cy.navigate` should then use `history.push` of that instance, instead of `window.history.pushState`. Additionally, you can then use `cy.history` for access to the `history` object in tests.
