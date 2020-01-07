import { History } from 'history';
import { HISTORY } from './common';

/**
 * Navigate via History API. Simple SPA alternative to `cy.visit`.
 *
 * @example
 *     cy.history().then(history => console.log(history));
 */
export default function history(): Promise<History> {
  return new Promise((resolve, reject) => {
    const window = (cy as any).state('window');

    window[HISTORY]
      ? resolve(window[HISTORY])
      : reject(`History object not found at window.${HISTORY}`);
  });
}
