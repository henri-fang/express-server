import express from 'express';
import { router as userRouter } from './router/userRouter';

const app = express();
const port = process.env.PORT || 8000;
app.get('/', (_, res) => res.send('Express + TypeScript Server'));
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
