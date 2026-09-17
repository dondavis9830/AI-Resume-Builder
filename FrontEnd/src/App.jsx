
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Info from './Pages/Info'
import Download from './Pages/Download'
import Resume from './Pages/Resume'
import Saved from './Pages/Saved'
import View from './Pages/View'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'



function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/downloads' element={<Download/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/all-resume' element={<Saved/>} />
        <Route path='/resume/:id' element={<View/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
