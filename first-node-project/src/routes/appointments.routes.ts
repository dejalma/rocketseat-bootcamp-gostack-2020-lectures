import { Router } from 'express'
import { parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const appointmentsRouter = Router()

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)

  return res.json(await appointmentsRepository.find())
})

appointmentsRouter.post('/', async (req, res) => {
  try {
    const { provider_id, date } = req.body
    const parsedDate = parseISO(date)

    const creatAppointment = new CreateAppointmentService()

    const appointment = await creatAppointment.execute({
      provider_id,
      date: parsedDate,
    })

    return res.json(appointment)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default appointmentsRouter
