export function loadEnvironment(env = 'develop') {
  // Try multiple possible paths
  const possiblePaths = [
    `./tests/k6/config/${env}.json`,
    `../config/${env}.json`,
    `./config/${env}.json`,
  ];

  for (const configPath of possiblePaths) {
    try {
      const raw = open(configPath, 'text');
      const config = JSON.parse(raw);
      console.log(`✅ Loaded config from: ${configPath}`);
      return config;
    } catch (error) {
      // Continue to next path
    }
  }

  // If all paths fail, throw error with clear message
  throw new Error(`❌ Could not find config file for environment: ${env}. Tried: ${possiblePaths.join(', ')}`);
}