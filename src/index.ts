/// <reference path="./types.ts"/>

import navigate from './navigate';
import { HISTORY } from './common';
import { createBrowserHistory as createHistory } from 'history';

Cypress.Commands.add('navigate', { prevSubject: false }, navigate);
