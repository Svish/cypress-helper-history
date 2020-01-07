import history from './history';

/**
 * Navigate via History API. Simple SPA alternative to `cy.visit`.
 *
 * Tries using `cy.history`, but falls back to `window.history` if not set up.
 *
 * @example
 *     cy.navigate('/foobar');
 */
export default function navigate(
  path: string,
  options?: Partial<Cypress.Loggable>
): Promise<void> {
  const shouldLog = options && options.log;
  let logger: Cypress.Log;

  if (shouldLog !== false)
    logger = Cypress.log({
      name: 'navigate',
      displayName: 'Navigate',
      message: [path],
    });

  return history()
    .then(history => {
      history.push(path);
    })
    .catch(() => {
      const window = (cy as any).state('window');
      window.history.pushState(undefined, '', path);
    });
}
