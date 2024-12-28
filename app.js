import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import swaggerUI from "swagger-ui-express"
import specs from './swagger/swagger.js';
import dotenv from "dotenv"

dotenv.config();

const app = express();


app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/', routes);

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch(err => console.error('Error al conectar:', err));
  
export default app;
