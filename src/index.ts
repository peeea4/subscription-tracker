import express, { Application, Request, Response } from 'express';
import { AppConfig } from './config/env';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, its the Subscription Tracker API!');
});

app.listen(AppConfig.port, () => {
  console.log(`Server running at http://localhost:${AppConfig.port}`);
});

export default app;
