import express, { Application, Request, Response } from 'express';
import { AppConfig } from './config/env';
import userRouter from './routes/user.routes';
import subscriptionRouter from './routes/subscription.routes';
import authRouter from './routes/auth.routes';

const app: Application = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, its the Subscription Tracker API!');
});

app.listen(AppConfig.port, () => {
  console.log(`Server running at http://localhost:${AppConfig.port}`);
});

export default app;
