import About from "./components/About/About"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App