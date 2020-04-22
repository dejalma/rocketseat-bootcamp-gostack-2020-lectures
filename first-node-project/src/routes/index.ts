import { Router } from 'express'
import appointmentsRouter from './appointments.routes'

const routes = Router()

routes.use('/appointments', appointmentsRouter)

routes.get('/', (req, res) => res.json({ message: '🚀 Server started!' }))

routes.post('/users', (req, res) => {
  const { name, email } = req.body

  const user = {
    name,
    email,
  }

  return res.json(user)
})

export default routes
