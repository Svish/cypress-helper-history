import { History } from 'history';

const KEY = '__chh__history__';

export default function navigate(
  path: string,
  state?: unknown,
  options?: Partial<Cypress.Loggable>
): void {
  const shouldLog = options && options.log;

  const window = (cy as any).state('window');
  const history = window[KEY] as History<unknown>;

  if (shouldLog !== false)
    Cypress.log({
      name: 'navigate',
      displayName: 'Navigate',
      message: [path],
      consoleProps: () => ({
        path,
        state,
        used: history ? 'history.push' : 'window.history.pushState',
        instance: history ?? window.history,
      }),
    });

  if (history) {
    history.push(path, state);
  } else {
    window.history.pushState(state, '', path);
  }
}
