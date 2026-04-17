import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReadCrewmates from './pages/ReadCrewmates'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import DetailCrewmate from './pages/DetailCrewmate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadCrewmates />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<DetailCrewmate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App