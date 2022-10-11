import './App.css'
import Navigation from './component/Navigation'
import Header from './component/Header'
import Restaurant from './component/Restaurant'
import Near from './component/Near'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Restaurant />
      <Near />
    </div>
  )
}

export default App
