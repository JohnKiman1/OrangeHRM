import fs from 'fs';
import path from 'path';

export function readJsonData(filePath: string): Record<string, unknown> {
  const resolvedPath = path.resolve(filePath);
  const fileContent = fs.readFileSync(resolvedPath, 'utf8');
  return JSON.parse(fileContent) as Record<string, unknown>;
}
