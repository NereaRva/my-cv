import './App.css'
import { CV } from "./CV/CV";
import Hero from './Components/Hero/Hero'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Header from './Components/Header/Header'

const {header,hero,education,experience, skills} = CV

function App() {
 
  return (
   
     <div className='App'>
     <Header header= {header}/>
        <Hero hero = {hero}/>
        <div className=" container">
          <div className='col'>
            <Education education={education}/>
          </div>
          
        </div>
        <div className='container'>
            <Skills skills={skills}/>
          </div>
          <div className='col'>
            <h3>Experiencia</h3>
            <Experience experience={experience}/>
          </div>
    </div>   
  )
}

export default App
