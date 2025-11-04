import { Router } from 'express';

const authRouter = Router();

authRouter.post('/sing-up', (req, res) => res.send({ title: 'Sign Up' }));
authRouter.post('/sing-in', (req, res) => res.send({ title: 'Sign In' }));
authRouter.post('/sing-out', (req, res) => res.send({ title: 'Sign Out' }));

export default authRouter;
