import { startOfHour } from 'date-fns'

import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider: string
  date: Date
}

class CreateAppointmentService {
  private repository: AppointmentsRepository

  constructor(repository: AppointmentsRepository) {
    this.repository = repository
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date)

    if (this.repository.findByDate(appointmentDate)) {
      throw Error('The date and time chosed is alredy booked.')
    }

    const appointment = this.repository.create({
      provider,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
