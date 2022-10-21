import './App.css'
import './styles/styles.css'

import Home from './pages/Home'
import Detail from './component/Detail'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
