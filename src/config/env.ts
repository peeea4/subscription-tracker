import { config } from 'dotenv';
import path from 'path';

const cwd = process.cwd();
const nodeEnv = process.env.NODE_ENV || 'development';

const envFilesInOrder = [
  path.resolve(cwd, '.env'),
  path.resolve(cwd, '.env.local'),
  path.resolve(cwd, `.env.${nodeEnv}`),
  path.resolve(cwd, `.env.${nodeEnv}.local`),
];

for (const envFile of envFilesInOrder) {
  config({ path: envFile, override: true });
}

function toNumber(value: string | undefined, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export const AppConfig = {
  nodeEnv,
  port: toNumber(process.env.PORT, 3000),
} as const;

export type AppConfig = typeof AppConfig;
