import './index.css'
import './admin.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterCourse from './RegisterCourse'
import RegisterSubject from './RegisterSubject'
import RegisterGrade from './RegisterGrade'
import RegisterProfessor from './RegisterProfessor'
import RegisterStudent from './RegisterStudent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div>
      <RegisterCourse />
    </div>
    <div>
      <RegisterSubject />
    </div>
    <div>
      <RegisterGrade />
    </div>
    <div>
      <RegisterProfessor />
    </div>
    <div>
      <RegisterStudent />
    </div>
    </>
  </React.StrictMode>
)
