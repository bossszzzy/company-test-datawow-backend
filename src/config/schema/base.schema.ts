import * as dotenv from 'dotenv';
import * as path from 'path';
import z from 'zod';

const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });

export const baseSchema = z.object({
  NODE_ENV: z.enum(['DEVELOPMENT', 'TEST', 'STAGGING', 'PRODUCTION']),
  PORT: z.coerce.number().int().min(0).max(65535),
  DATABASE_URL: z.url()
});

export type BaseConfig = z.infer<typeof baseSchema>;
