export function loadEnvironment(env = 'develop') {
  const configPath = `../config/${env}.json`;
  const raw = open(configPath, 'text');
  return JSON.parse(raw);
}
