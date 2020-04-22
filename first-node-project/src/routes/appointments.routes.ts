import { Router } from 'express'
import { parseISO } from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()
const creatAppointment = new CreateAppointmentService(appointmentsRepository)

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all()

  return res.json(appointments)
})

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body
    const parsedDate = parseISO(date)

    const appointment = creatAppointment.execute({ date: parsedDate, provider })

    return res.json(appointment)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default appointmentsRouter