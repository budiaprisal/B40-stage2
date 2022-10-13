import './App.css'
import './styles/styles.css'
import Navigation from './component/Navigation'
import Header from './component/Header'
import Menu from './component/Menu'
import Menu1 from './component/Menu1'
import Menu2 from './component/Menu2'
import Menu3 from './component/Menu3'
import Profile from './component/Profile'
import Addproduk from './component/Addproduk'
import EditProfile from './component/EditProfile'
import Cardorder from './component/Cardorder'
import Burger from './component/Burger'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/Menu1" element={<Menu1 />} />
          <Route exact path="/Menu2" element={<Menu2 />} />
          <Route exact path="/Menu3" element={<Menu3 />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Addproduk" element={<Addproduk />} />
          <Route exact path="/EditProfile" element={<EditProfile />} />
          <Route exact path="/Cardorder" element={<Cardorder />} />
          <Route exact path="/Burger" element={<Burger />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
