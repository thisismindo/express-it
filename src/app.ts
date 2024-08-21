// express-it
import express, { Request, Response } from 'express';
import { sequelize } from './db';
import userRoutes from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

console.log('Test database connection.')
sequelize.authenticate().then(() => {
  console.log('Database connection established successfully.');
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});


app.get('/', (req: Request, res: Response) => {
  res.send('API Service is running');
});

// users
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`API Service is running on port ${port}`);
});
