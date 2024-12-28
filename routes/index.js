import express from 'express'
// import userRoutes from './userRoutes.js'
import taskRoutes from "./taskRoutes.js"

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Bienvenido' })
})

routes.use('/task', taskRoutes)


export default routes