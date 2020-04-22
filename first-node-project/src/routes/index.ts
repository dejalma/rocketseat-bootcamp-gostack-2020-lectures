import { Router } from 'express'

const routes = Router()

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
