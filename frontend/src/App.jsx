import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateUser from './components/CreateUser'
import ListUser from './components/ListUser'

function App() {

  return (
    <>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<CreateUser />} />
        </Routes>
      </div>
    </>
  )
}

export default App
