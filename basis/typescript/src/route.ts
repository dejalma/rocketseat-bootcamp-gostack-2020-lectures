import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export default function helloWord(req: Request, res: Response) {
  const user = createUser({
    email: 'dj@gmail.com', 
    password: 'asdf',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'JavaScript', experience: 100 },
      { title: 'Java', experience: 120 }
    ]
  })

  console.log(user)

  return res.json({ msg: 'Hello world!' })
}
