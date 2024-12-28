import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import swaggerUI from "swagger-ui-express"
import specs from './swagger/swagger.js';


const app = express();


app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => console.error('Error al conectar:', err));

export default app;
