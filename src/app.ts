import express from 'express';
import userRoutes from './routes/userRoutes';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

app.use(globalErrorHandler);

export default app;
