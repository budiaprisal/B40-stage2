import './App.css'
import './styles/styles.css'
import Navigation from './component/Navigation'
import Home from './pages/Home'
import Menu from './component/Menu'
import Profile from './pages/Profile'
import Addproduk from './component/Addproduk'
import EditProfile from './component/EditProfile'
import Cardorder from './component/Cardorder'
import IncomeTransaction from './component/IncomeTransaction'
import ProfileUser from './component/ProfileUser'
import EditUser from './component/EditUser'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Addproduk" element={<Addproduk />} />
          <Route exact path="/EditProfile" element={<EditProfile />} />
          <Route exact path="/Cardorder" element={<Cardorder />} />
          <Route exact path="/ProfileUser" element={<ProfileUser />} />
          <Route exact path="/EditUser" element={<EditUser />} />
          <Route
            exact
            path="/IncomeTransaction"
            element={<IncomeTransaction />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
