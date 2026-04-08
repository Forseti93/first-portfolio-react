import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { HashRouter  as Router } from 'react-router-dom'
import Layout from './components/Layout/index'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import useWindowSize from './hooks/useWindowSize'

function App() {
  const { width } = useWindowSize()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home width={width} />} />
          <Route path="contact" element={<Contact width={width} />} />
          <Route path="about" element={<About width={width} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
