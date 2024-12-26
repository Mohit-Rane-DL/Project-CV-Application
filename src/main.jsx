import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Intro } from './components/Intro.jsx'
import {GeneralInfo} from './components/GeneralInfo.jsx'
import { Skills } from './components/Skills.jsx'
import { Education } from './components/Education.jsx'
import { Projects } from './components/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app'>
    <Intro />
    <GeneralInfo />
    <Skills />
    <Education />
    <Projects />
    </div>
  </StrictMode>,
)
