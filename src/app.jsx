import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captcha" element={<PlaceholderPage title="Captcha Tasks" />} />
        <Route path="/bonus" element={<PlaceholderPage title="Bonus VEs" />} />
        <Route path="/swap" element={<PlaceholderPage title="Swap Center" />} />
        <Route path="/exchange" element={<PlaceholderPage title="Exchange Center" />} />
        <Route path="/refer" element={<PlaceholderPage title="Refer & Earn" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
