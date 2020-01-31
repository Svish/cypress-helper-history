/// <reference path="./types.ts"/>

import navigate from './navigate';

Cypress.Commands.add('navigate', { prevSubject: false }, navigate);
