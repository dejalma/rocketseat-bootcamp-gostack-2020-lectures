import React, { useState, useEffect } from 'react'
import Header from './components/Header'

import api from './services/api'

import './App.css'
import backgroundImg from './assets/bikes.jpg'

export default function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(res => {
      setProjects(res.data)
    })
  }, [])

  const handleAddProject = async () => {
    const res = await api.post('projects', {
      title: `New project ${Date.now()}`,
      owner: 'Dj ;)',
    })

    const project = res.data

    setProjects([...projects, project])
  }

  return (
    <>
      <img width={300} src={backgroundImg} />

      <Header title="🚀 Projects">
        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </Header>

      <Header title="🍕 eating time" />

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  ) 
}
